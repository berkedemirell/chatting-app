import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Messages = () => {
  const { user, handleSelectedMessage, handleLogout, messageReceiver, allUsers } = useContext(UserContext);
  const [search, setSearch] = useState('')
  const [searchedUsers, setSearchedUsers] = useState([])
  
  useEffect(() => {
    const updateUser = () => {
      allUsers.map((obj) => {
        if(Number(obj.id) === Number(user.id)) {
          return obj.chatMessages = user.chatMessages
        }
        else {
          return
        }
      })
    }
    const updateReceiver = () => {
      allUsers.map((obj) => {
        if(Number(obj.id) === Number(messageReceiver.id)) {
          return obj.chatMessages = messageReceiver.chatMessages
        }
        else {
          return
        }
      })
    }
    updateUser()
    updateReceiver()
  }, [allUsers, user, messageReceiver])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const asd = user.chatMessages.filter((obj) => obj.from.includes(search))
    setSearchedUsers(asd)

  }, [user,search])



  return (
    <div className="w-screen h-fit flex justify-center font-mono asd">
      <div className="flex flex-col bg-slate-300 p-4 mt-16 rounded-lg w-1/2">
        <div className="border-b border-slate-400 p-2 flex flex-row items-center gap-2 justify-between">
          <div>
            <img src={user?.image} alt="foto" className="w-12 h-12 rounded-full"/>
          </div>
          <div>
            <input
              type="text"
              placeholder="search"
              className="rounded-md p-1"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row items-center gap-6">
            <Link to='/create' className="p-1 pl-2 pr-2 bg-green-900 text-slate-50 text-md rounded-md">New Chat</Link>
            <Link
              to="/"
              onClick={handleLogout}
              className="text-3xl font-bold text-red-900"
            >
              X
            </Link>
          </div>
        </div>
        <div>
          {user.chatMessages.length !== 0 ? (
            searchedUsers.length !== 0 ? searchedUsers.map((us) => {
              return (
                <Link
                  id={us.from}
                  to={`/messages/${us.id}`}
                  key={us.id}
                  onClick={handleSelectedMessage}
                  className="flex flex-row items-center justify-start gap-2 mt-2 hover:bg-slate-50 p-2 rounded-md"
                >
                  <div className="">
                    <img
                      id={us?.from}
                      src={us?.image}
                      alt="user"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="">
                    <span
                      id={us.from}
                      className="font-bold text-lg block -mb-2"
                    >
                      {us.from}
                    </span>
                    <span id={us.from} className="font-bold opacity-70 block">
                      {us?.messages
                        ?.filter((mes) => mes.id === us.messages.length)[0]
                        ?.message.slice(0, 60)}
                      {us?.messages?.filter(
                        (mes) => mes.id === us.messages.length
                      )[0]?.message.length > 50
                        ? "..."
                        : ""}
                    </span>
                  </div>
                  {us.messages.filter(mes => mes.isRead === false).length === 0 ? '' : <div className="font-bold ml-auto bg-green-900 text-slate-50 p-1 rounded-full pl-2 pr-2">+{us.messages.filter(mes => mes.isRead === false).length}</div> }
                </Link>
              );
            }) : <p className="text-center mt-4 text-xl font-bold">No users found.</p>
          ) : (
            <div>
              <p className="mt-4 text-center font-mono text-xl text-slate-700">
                There is no any chat has started yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
