// import { Component } from "react";
import ToDoScreen from "./screens/ToDoScreen";

//class based conponent
// class App extends Component{
//     render() {
//         return(
//             <ToDoScreen/>
//         )
//     }
// }

//Functional Component
const App= ()=> {
    //a function does not require a render function but should return something
    return <ToDoScreen/>
}
export default App;