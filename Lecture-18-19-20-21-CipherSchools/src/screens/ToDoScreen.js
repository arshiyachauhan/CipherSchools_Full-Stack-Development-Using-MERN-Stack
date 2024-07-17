// import { Component } from "react";

//creating a class based component
// class ToDoScreen extends Component {
//     //State is a kind of a variable which is present in a component which is used to store information that can dynamically change or change with change of UI
//      state={
//         taskCount: 0,
//     };
//     //variable cannnot be changed dynammically in react
//     // taskCount= 0;
//     render(){
//         return (
//             <div className="screen">
//         <h1 className="ui heading center">To Do List</h1>  
//         <div>
//            <button onClick={()=> {
//             //printing taskcount in console
//             // this.taskCount++;
//             // console.log(this.taskCount);

//             //using setter function to set the state
//             this.setState({...this.state, 
//                 taskCount: this.state.taskCount+1,});
//             console.log(this.state.taskCount);

//             //listening to events inside react
//             // console.log("Add Task Button was clicked.");
//            }} className="ui secondary button">Add Task</button>
//            <p>The number of tasks are: {this.state.taskCount}</p>
//         </div> 
//         </div>
//     );
// }
// }


import {useState} from "react";
import Task from "../components/Task";
//creating a Functional Component
//State cannot be used inside functional component bc of non-use of inheritance & thus hooks are used
//hooks are reusable functions that can allow certain activity
const ToDoScreen = () => {
    // const [taskCount, setTaskCount] = useState(0);
    const [taskList, setTaskList] = useState([]);
    return (
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
    </div>
);    
}
export default ToDoScreen;
