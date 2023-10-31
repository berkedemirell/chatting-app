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
  const [isMenu, setIsMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(null)

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
    const asd = user?.chatMessages
      .sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt))
      .filter((obj) => obj.from.includes(search));
    setSearchedUsers(asd);
  }, [user, search]);

  const handleDelete = (e) => {
    e.preventDefault();
    const newState = {
      ...user,
      chatMessages: user.chatMessages.filter((us) => {
        if (Number(us.id) === Number(e.target.id)) {
          return false;
        } else {
          return true;
        }
      }),
    };
    setUser(newState);
  };

  useEffect(() => {
    const deneme = () => {
      if(window.innerWidth > 850) {
        setScreenWidth(50)
      } else if(window.innerWidth < 850 && window.innerWidth > 550) {
        setScreenWidth(30)
      } else if(window.innerWidth < 550) {
        setScreenWidth(10)
      }

    }
    deneme()
  }
  , [setScreenWidth])

  return (
    <div className="w-screen h-fit flex justify-center font-mono messageDivAnimation">
      <div className="flex flex-col bg-slate-300 p-4 mt-16 rounded-lg w-1/2">
        <div className="border-b border-slate-400 p-2 sms:p-0 sms:pb-2 flex flex-row items-center gap-2 justify-between">
          <div className="flex flex-col items-center">
            <img
              src={user?.image}
              alt="foto"
              className="w-12 h-12 rounded-full mmd:w-8 mmd:h-8 xss:h-6 xss:w-6"
            />
            <p className="font-bold text-lg mmd:text-md mdx:text-sm xss:text-xs">
              {user.username}
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="search"
              className="rounded-md p-1 llg:w-36 mmd:text-sm mdx:w-24 sms:w-20 sms:h-6 xss:text-xs"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row items-center gap-4 llg:gap-2 mmd:gap-4 sms:hidden">
            <div className="flex flex-row items-center gap-4 llg:gap-1 mmd:flex-col mdx:flex-row sms:flex-col">
              <Link
                to="/create"
                className="p-1 pl-2 pr-2 bg-green-900 text-slate-50 text-md rounded-md font-bold llg:text-sm mmd:text-xs"
              >
                {window.innerWidth > 700 ? "New Chat" : "New"}
              </Link>
              <Link
                to="/add"
                className="p-1 pl-2 pr-2 bg-indigo-900 text-slate-50 text-md rounded-md font-bold llg:text-sm mmd:text-xs"
              >
                {window.innerWidth > 700 ? "Add a Friend" : "Add"}
              </Link>
            </div>
            <Link
              to="/"
              onClick={handleLogout}
              className="text-3xl font-bold text-red-900"
            >
              X
            </Link>
          </div>
          <div className="relative hidden sms:block z-10">
            <div className="rotate-90 text-slate-950 font-bold font-bold xss:text-sm" onClick={() => setIsMenu((prev) => !prev)}>...</div>
            {isMenu && <div className="flex w-40 -left-32 top-8 flex-col items-start gap-4 absolute bg-slate-950 p-2 pl-4 pr-4 rounded-md">
              <div className="flex flex-col items-start gap-4">
                <Link
                  to="/create"
                  className=" font-bold text-slate-50 text-lg"
                >
                  New Chat
                </Link>
                <Link
                  to="/add"
                  className=" font-bold text-slate-50 text-lg"
                >
                  Add Friend
                </Link>
              </div>
              <Link
                to="/"
                onClick={handleLogout}
                className="text-lg font-bold text-slate-50"
              >
                Exit
              </Link>
            </div>}
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
                      className="flex flex-row items-center ssm:pl-0 ssm:pr-0 w-full justify-start gap-2 mt-2 hover:bg-slate-50 p-2 rounded-md"
                    >
                      <div className="">
                        <img
                          id={us?.from}
                          src={us?.image}
                          alt="user"
                          className="w-12 h-12 rounded-full mmd:w-10 mmd:h-10 sms:h-8 sms:w-8 ssm:w-6 ssm:h-6"
                        />
                      </div>
                      <div className="ssm:flex ssm:flex-col ssm:items-start ssm:gap-1 ssm:justify-start">
                        <span
                          id={us.from}
                          className="font-bold text-lg block -mb-2 sms:text-md ssm:text-sm"
                        >
                          {us.from}
                          {us.from === user.username ? "(you)" : ""}
                        </span>
                        <span
                          id={us.from}
                          className="font-bold opacity-70 block llg:text-sm sms:text-xs"
                        >
                          {us.messages.length === 0
                            ? ""
                            : us.messages[us.messages.length - 1].message.slice(
                                0,
                                Number(screenWidth)
                              )}
                          {us.messages.length === 0
                            ? ""
                            : us.messages[us.messages.length - 1].message
                                .length > 50
                            ? "..."
                            : ""}
                        </span>
                      </div>
                      {us.messages.filter((mes) => mes.isRead === false)
                        .length === 0 ? (
                        ""
                      ) : (
                        <div
                          className="font-bold ml-auto bg-green-900 text-slate-50 p-1 rounded-full pl-2 pr-2 mr-4 mdx:text-xs mdx:pl-1 mdx:pr-1"
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
                      <button
                        id={us.id}
                        className="bg-red-900 text-slate-50 font-bold p-1 pl-3 pr-3 rounded-full sms:pl-2 sms:pr-2 sms:text-sm xss:text-xs"
                        onClick={handleDelete}
                      >
                        🗑
                      </button>
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
