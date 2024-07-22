//Context is a piece of information that multiple components should be aware of
import { createContext, useState } from "react";
//task context is a context object, which is a combination of the information that is to be shared and the react component
const TaskContext = createContext();
const TaskProvider = ({children}) => {
    const [taskList, setTaskList]= useState([]);

    const addNewTask= (task) => {
    setTaskList([...taskList, {...task, createdDate: new Date() }]);
    };
return (
    //Provider is the entity which will provide the information
    <TaskContext.Provider value= {{taskList, addNewTask}}>
        {children}
    </TaskContext.Provider>
);
};
export {TaskProvider};
export default TaskContext;
