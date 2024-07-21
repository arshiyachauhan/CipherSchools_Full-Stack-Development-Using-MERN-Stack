// import { Component } from "react";
import ToDoScreen from "./screens/ToDoScreen";
import AddTask from "./components/AddTask";

//import router
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//adding router logic
const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen/>,
    },
    {
        path: "/add-task",
        element: <AddTask />,
    },
]);
const App = () => {
    return <RouterProvider router = {router}/>;
};
export default App;
