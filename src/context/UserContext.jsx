/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import users from "../data/userData";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState({});
  const [messageReceiver, setMessageReceiver] = useState({});
  const [allUsers, setAllUsers] = useState(users)
  const [other, setOther] = useState({})
  const [lütfen, setLütfen] = useState(false)
  const [bişey, setBişey] = useState({})

  const [message, setMessage] = useState({});

  const handleSelectedMessage = (e) => {
    const selected = user.chatMessages.filter((us) => us.from === e.target.id)[0];
    setSelectedMessage(selected);
    setLütfen(true)
    setBişey(allUsers.filter((us) => us.username === selected.from))
  };


  const handleLogout = () => {
    setUser(null);
  };


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
        setAllUsers,
        other,
        setOther,
        lütfen,
        setLütfen,
        bişey,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
