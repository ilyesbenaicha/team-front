import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData,kanbanGrid } from '../../data/datasource';

const Tasks = () => {
  return (   
    <div>
<KanbanComponent>
  <ColumnsDirective
  id="kanban"
  dataSource={kanbanData}
  cardSettings={{contentField: 'Summary',headerField: 'Id'}}
  >
    {kanbanGrid.map((item,index)=>
    <ColumnsDirective key={index}{...item} />
    )}
  </ColumnsDirective>
</KanbanComponent>    </div>
  );
};

export default Tasks;
