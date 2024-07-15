//JSX(Javascript XML)-It looks and behaves like html
//It contains HTML tags and React components
import logo from './logo.svg';
import './App.css';

function App() {
  const NAME= 'CipherSchools'
  return (
    <>
    <div>
      <h1 style={{
        //1st  bracket represents javascript code and 2nd represents javascript object
        color: "red",
        textAlign: "center",
      }}>Hello from {NAME}!</h1>
    </div>
    <div>
      <p>This is {NAME}.</p>
    </div>
    </>
  )
  // return (
  //   <div>
  //     <h1>Hello from CipherSchools!</h1>
  //   </div>
  // )
}
export default App;
