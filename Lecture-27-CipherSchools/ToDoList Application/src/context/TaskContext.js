//Context is a piece of information that multiple components should be aware of
import { createContext, useState } from "react";
import {v4 as randomUUID } from "uuid";
//task context is a context object, which is a combination of the information that is to be shared and the react component
const TaskContext = createContext();
const TASK_EDITABLE_FIELDLIST= ["title", "description"];
const TaskProvider = ({children}) => {
    const [taskList, setTaskList]= useState([]);

    const addNewTask= (task) => {
    setTaskList([...taskList, 
        {...task, createdDate: new Date(), 
            taskId: randomUUID() }]);
    };

    //Functionality to delete a task
    const deleteTask = (taskId) => {
        setTaskList(taskList.filter((task) => task.taskId !== taskId));
    };

    //Functionality for editing
    const editTask = (task) => {
        let tempTaskList = [...taskList];
        for (let t of tempTaskList) {
            if(t.taskId === task.taskId){
                TASK_EDITABLE_FIELDLIST.forEach(
                    (field) => (t[field] = task[field]) );
            }
        }
        setTaskList(taskList);
    };

return (
    //Provider is the entity which will provide the information
    <TaskContext.Provider value= {{taskList, addNewTask, deleteTask, editTask}}>
        {children}
    </TaskContext.Provider>
);
};
export {TaskProvider};
export default TaskContext;
