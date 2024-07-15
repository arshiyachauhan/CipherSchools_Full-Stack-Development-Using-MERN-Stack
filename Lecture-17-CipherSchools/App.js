// React Components are like functions and thus accept arguments or parameters that can control the UI/logic of the component.
// They contain some logical code and they return some UI.
// In React a component can be represented by a JS code or a JS function.

import logo from './logo.svg';
import './App.css';
import { Component} from "react";

//to create a class based component we must always extend to Component class by react
class App extends Component{
  name = "CipherSchools";
  Name= "Arshiya";
  //a render function is important and it should always return something(UI)
    render(){
      return (
        <>
        <div>
          <h1>This is CipherSchools!</h1>
          {/* using this keyword for referring to class based components */}
          <h1>This is {this.name}!</h1>  
        </div>
        <div>
          <p>This is a paragraph and name is: {this.Name}</p>
        </div>
        </>
      );
    }
}
export default App;
