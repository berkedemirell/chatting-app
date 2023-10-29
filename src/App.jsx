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
import AddFriend from "./components/AddFriend";

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
    },
    {
      path: '/add',
      element: <AddFriend/>
    },
  ])

  return <div className="bg-indigo-500 w-screen h-screen">
    
    <RouterProvider router={router}></RouterProvider>
    
    
    </div>;
}

export default App;
