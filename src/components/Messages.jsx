import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Messages = () => {
  const {
    user,
    handleSelectedMessage,
    handleLogout,
    messageReceiver,
    allUsers,
    setUser,
  } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  useEffect(() => {
    const updateUser = () => {
      allUsers.map((obj) => {
        if (Number(obj.id) === Number(user.id)) {
          return (obj.chatMessages = user.chatMessages);
        } else {
          return;
        }
      });
    };
    const updateReceiver = () => {
      allUsers.map((obj) => {
        if (Number(obj.id) === Number(messageReceiver.id)) {
          return (obj.chatMessages = messageReceiver.chatMessages);
        } else {
          return;
        }
      });
    };
    updateUser();
    updateReceiver();
  }, [allUsers, user, messageReceiver]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const asd = user?.chatMessages.sort((a,b) => Number(b.id) - Number(a.id)).filter((obj) => obj.from.includes(search));
    setSearchedUsers(asd);
  }, [user, search]);


  const handleDelete = (e) => {
    e.preventDefault();
    const newState = {...user, chatMessages: user.chatMessages.filter((us) => {
      if(Number(us.id) === Number(e.target.id)) {
        return false
      } else {
        return true
      }
    })}

    setUser(newState)
  }

  console.log(searchedUsers)


  return (
    <div className="w-screen h-fit flex justify-center font-mono messageDivAnimation">
      <div className="flex flex-col bg-slate-300 p-4 mt-16 rounded-lg w-1/2">
        <div className="border-b border-slate-400 p-2 flex flex-row items-center gap-2 justify-between">
          <div>
            <img
              src={user?.image}
              alt="foto"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="search"
              className="rounded-md p-1"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row items-center gap-4">
            <Link
              to="/create"
              className="p-1 pl-2 pr-2 bg-green-900 text-slate-50 text-md rounded-md font-bold"
            >
              New Chat
            </Link>
            <Link
              to="/add"
              className="p-1 pl-2 pr-2 bg-indigo-900 text-slate-50 text-md rounded-md font-bold"
            >
              Add a Friend
            </Link>
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
            searchedUsers.length !== 0 ? (
              searchedUsers.map((us) => {
                return (
                  <div key={us.id} className="flex flex-row items-center gap-2">
                    <Link
                      id={us.from}
                      to={`/messages/${us.id}`}
                      onClick={handleSelectedMessage}
                      className="flex flex-row items-center w-full justify-start gap-2 mt-2 hover:bg-slate-50 p-2 rounded-md"
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
                          {us.from === user.username ? "(you)" : ""}
                        </span>
                        <span
                          id={us.from}
                          className="font-bold opacity-70 block"
                        >
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
                      {us.messages.filter((mes) => mes.isRead === false)
                        .length === 0 ? (
                        ""
                      ) : (
                        <div
                          className="font-bold ml-auto bg-green-900 text-slate-50 p-1 rounded-full pl-2 pr-2 mr-4"
                          id={us.from}
                        >
                          +
                          {
                            us.messages.filter((mes) => mes.isRead === false)
                              .length
                          }
                        </div>
                      )}
                    </Link>
                    <div>
                      <button id={us.id} className="bg-red-900 text-slate-50 font-bold p-1 pl-3 pr-3 rounded-full" onClick={handleDelete}>🗑</button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center mt-4 text-xl font-bold">
                No user found.
              </p>
            )
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
