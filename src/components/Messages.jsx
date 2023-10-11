import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Messages = () => {
  const { user, handleSelectedMessage, handleLogout } = useContext(UserContext);


  return (
    <div className="w-screen h-fit flex justify-center font-mono">
      <div className="flex flex-col bg-slate-300 p-4 mt-24 rounded-lg w-1/2">
        <div className="border-b border-slate-400 p-2 flex flex-row items-center gap-2 justify-between">
          <div>
            <img src={user?.image} alt="" className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <input
              type="text"
              placeholder="search"
              className="rounded-md p-1"
            />
          </div>
          <Link
            to="/"
            onClick={handleLogout}
            className="text-2xl font-bold text-red-900"
          >
            X
          </Link>
        </div>
        <div>
          {user.chatMessages.length !== 0 ? (
            user?.chatMessages.map((us) => {
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
                      alt=""
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
                        ?.message.slice(0, 60)}{
                          us?.messages
                        ?.filter((mes) => mes.id === us.messages.length)[0]
                        ?.message.length > 50 ? '...' : ''
                        }
                    </span>
                  </div>
                </Link>
              );
            })
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
