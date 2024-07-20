import {useState} from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";

const ToDoScreen = () => {
    // const [taskCount, setTaskCount] = useState(0);
    const [taskList, setTaskList] = useState([]);
    //creating a function for adding new task
    let addNewTask= (task) => {
        setTaskList([...taskList, { ...task, createdDate: new Date() }]);
    };
    return (
        <>
        <div className="screen">
    <h1 className="ui heading center">To Do List</h1>  
    <div>
       <button onClick={(e)=> {
        // setTaskCount(taskCount+1);
        setTaskList([...taskList, {
            title: "Going to GYM",
            description:"Going to gym is good for muscle growth and impacts overall health.",
            createdDate: new Date(),
        },
    ]);
       }} 
       className="ui secondary button">Add Task</button>
       {/* <p>The number of tasks are: {taskCount}</p> */}
       {/* <p>The number of tasks are: {taskList.length}</p> */}

       <section>
       {/* UI creation */}
       <div class="ui cards">
       {
        taskList.map((task, index) =>(
           <Task task={task} key={index}/> 
        ))
       }
       </div>
       </section>
    </div> 
    <AddTask/>
    </div>
    </>
);    
}
export default ToDoScreen;
