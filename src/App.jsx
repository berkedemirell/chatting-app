import { useContext } from "react";
import "./App.css";
import Login from "./components/Login";
// import users from './data/userData.js'
import UserContext from "./context/UserContext";
import Messages from "./components/Messages";
import ErrorPage from "./components/ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingleMessage from "./components/SingleMessage";
import NewMessage from "./components/NewMessage";

function App() {
  const { user } = useContext(UserContext);

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Login/>
    },
    {
      path:'/messages',
      element: user === null ? <ErrorPage/> : <Messages/>
    },
    {
      path:'/messages/:id',
      element: <SingleMessage/>
    },
    {
      path: '/create',
      element: <NewMessage/>
    }
  ])

  return <div className="">
    
    <RouterProvider router={router}></RouterProvider>
    
    
    </div>;
}

export default App;
