import { Button } from "@mui/material";
import React, { useState } from "react";
import { Form } from "reactstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/taskSlice";
function Addtasks() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
    etat : ""
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({
      title: "",
      description: "",
      etat:""
    }); 
    console.log("task=", task);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Enter a description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <br/>
        <input
          type="text"
          placeholder="Enter a description"
          value={task.etat}
          onChange={(e) => setTask({ ...task, etat: e.target.value })}
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fonFamily: "'Abel','sanSerif'"
          }}
        >
          Add task
        </Button>
      </Form>
    </>
  );
}

export default Addtasks;
