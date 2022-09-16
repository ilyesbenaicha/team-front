import React, { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Row } from "reactstrap";
import Addtasks from "./Addtasks";
import { COLUMN_NAMES } from "./constants";
import {useDispatch, useSelector} from 'react-redux'
import "./tasks.css";
import { getTask, updateTaskeByName } from "../../slices/taskSlice";
import TasksList from "./TasksList";

const MovableItem = ({
  name,
  index,
  currentColumnName,
  moveCardHandler,
  setTasks,
  _id,
  dispatch
}) => {
  const changeItemColumn = (currentItem, columnName) => {
    console.log( "change Column" ,currentItem,columnName)
    // dispatch updateTask (currentItem.name, )

    dispatch(updateTaskeByName({title:currentItem.name,columnName}))
    setTasks((prevState) => {
      console.log('prevState',prevState)
      return prevState.map((e) => {
        return {
          ...e,
          etat: e.title === currentItem.name ? columnName : e.etat
        };
      });
    });
  };

  const ref = useRef(null);
  
  const [, drop] = useDrop({
    accept: "Our first type",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { index, name, currentColumnName, type: "Our first type" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult) {
        const { name } = dropResult;
        const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;
        switch (name) {
          case IN_PROGRESS:
            changeItemColumn(item, IN_PROGRESS);
            break;
          case AWAITING_REVIEW:
            changeItemColumn(item, AWAITING_REVIEW);
            break;
          case DONE:
            changeItemColumn(item, DONE);
            break;
          case DO_IT:
            changeItemColumn(item, DO_IT);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} className="movable-item" style={{ opacity }}>
      {name}
    </div>
  );
};

const Column = ({ children, className, title }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Our first type",
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    // Override monitor.canDrop() function
    canDrop: (task) => {
      const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;
      const { currentColumnName } = task;
      return (
        currentColumnName === title ||
        (currentColumnName === DO_IT && title === IN_PROGRESS) ||
        (currentColumnName === IN_PROGRESS &&
          (title === DO_IT || title === AWAITING_REVIEW)) ||
        (currentColumnName === AWAITING_REVIEW &&
          (title === IN_PROGRESS || title === DONE)) ||
        (currentColumnName === DONE && title === AWAITING_REVIEW)
      );
    }
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return "rgb(188,251,255)";
      } else if (!canDrop) {
        return "rgb(255,188,188)";
      }
    } else {
      return "";
    }
  };

  return (
    <div
      ref={drop}
      className={className}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <p>{title}</p>
      {children}
    </div>
  );
};

export const Tasks = () => {
  const taskList= useSelector(state=>state.tasks.tasks)
  const [tasks, setTasks] = useState(taskList);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTask())
  }, [dispatch]);
  useEffect(() => {
    setTasks(taskList)
  }, [taskList]);

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = tasks[dragIndex];

    if (dragItem) {
      setTasks((prevState) => {
        console.log('prevstate dragitem',prevState)
        const itemId = prevState._id
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return {_id:itemId,coppiedStateArray};
      });
    }
  };

  const returnItemsForColumn = (columnName) => {
    return tasks
    .filter((task) => task.etat === columnName)
      ?.map((task, index) => (
        <MovableItem
          key={task.id}
          name={task.title}
          currentColumnName={task.etat}
          setTasks={setTasks}
          dispatch={dispatch}
          index={index}
          moveCardHandler={moveCardHandler}
          _id={task._id}
        />
      ));
  };

  const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;

  return (
    <>
    <Row>
    <TasksList/>
    <Col xs lg="3">
    <Addtasks/></Col>
    <Col md="auto">
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <Column title={DO_IT} className="column do-it-column">
          {returnItemsForColumn(DO_IT)}
        </Column>
        <Column title={IN_PROGRESS} className="column in-progress-column">
          {returnItemsForColumn(IN_PROGRESS)}
        </Column>
        <Column
          title={AWAITING_REVIEW}
          className="column awaiting-review-column"
        >
          {returnItemsForColumn(AWAITING_REVIEW)}
        </Column>
        <Column title={DONE} className="column done-column">
          {returnItemsForColumn(DONE)}
        </Column>
      </DndProvider>
    </div></Col></Row></>
  );
};
