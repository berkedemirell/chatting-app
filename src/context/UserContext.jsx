/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import users from "../data/userData";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState({});
  const [messageReceiver, setMessageReceiver] = useState({});
  const [allUsers, setAllUsers] = useState(users)

  const [message, setMessage] = useState({});

  const handleSelectedMessage = (e) => {
    const selected = user.chatMessages.filter((us) => us.from === e.target.id);
    setSelectedMessage(selected[0]);
  };

  const handleLogout = () => {
    setUser(null);
  };


  const getMessageId = allUsers.map((us) => us.chatMessages.map((ch) => ch.id)).reduce((a,b) => a.concat(b))
  const largestIdOfMessages = Math.max(...getMessageId)
  

  useEffect(() => {
    const receiver = allUsers.filter((us) => us.username === selectedMessage?.from)[0]
    setMessageReceiver(receiver)
  },[setMessageReceiver, selectedMessage, allUsers])


  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleSelectedMessage,
        selectedMessage,
        setSelectedMessage,
        message,
        setMessage,
        handleLogout,
        messageReceiver,
        setMessageReceiver,
        allUsers,
        setAllUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
