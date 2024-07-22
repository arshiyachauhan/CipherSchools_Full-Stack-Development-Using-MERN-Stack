import {useContext} from "react";
import Task from "../components/Task";
import TaskContext from "../context/TaskContext";
import {useNavigate} from "react-router-dom";
//creating a Functional Component
const ToDoScreen = () => {

    const {taskList} = useContext(TaskContext);
    const navigate = useNavigate();
    return (
        <>
        <div className="screen">
    <h1 className="ui heading center">To Do List</h1>  
    <div>
       <button onClick={(e)=> {
        // setTaskCount(taskCount+1);
        navigate("/add-task");
    
       }} 
       className="ui secondary button">Add Task
       </button>
       <section>
       {/* UI creation */}
       <div className="ui cards">
       {
        taskList.map((task, index) =>(
           <Task task={task} key={index}/> 
        ))
       }
       </div>
       </section>
    </div> 
    </div>
    </>
);    
}
export default ToDoScreen;
