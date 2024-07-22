import {useContext} from "react";
import Task from "../components/Task";
import TaskContext from "../context/TaskContext";
import {useNavigate} from "react-router-dom";
//creating a Functional Component
//State cannot be used inside functional component bc of non-use of inheritance & thus hooks are used
//hooks are reusable functions that can allow certain activity
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
        taskList.map((task) =>(
           <Task task={task} key={task.taskId}/> 
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
