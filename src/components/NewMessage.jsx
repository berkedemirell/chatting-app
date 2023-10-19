import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const NewMessage = () => {
  const {
    allUsers,
    user,
    setMessageReceiver,
    setUser,
    setSelectedMessage,
    messageReceiver,
    selectedMessage,
    other,
    setOther,
    lütfen,
    setLütfen,
  } = useContext(UserContext);
  const [isDropped, setIsDropped] = useState(false);
  const [newReceiver, setNewReceiver] = useState({});

  const handleDropDown = () => {
    setIsDropped((prev) => !prev);
  };

  const getMessageId = allUsers
    ?.map((us) => us?.chatMessages?.map((ch) => ch.id))
    .reduce((a, b) => a.concat(b));
  const largestIdOfMessages = Math.max(...getMessageId);

  const handleSelect = (e) => {
    e.preventDefault();
    const selected = user?.chatMessages.filter((us) => us.from === e.target.id);
    const receiver = allUsers.filter((us) => us.username === e.target.id)[0];
    const isIncludes = user.chatMessages
      .map((m) => m)
      .map((a) => a.from)
      .includes(receiver.username.toString());
    setLütfen(isIncludes);
    if (!isIncludes) {
      setNewReceiver(receiver);
    } else {
      setSelectedMessage(selected[0]);
    }

    setIsDropped(false);
  };

  const asd = () => {
    if (lütfen) {
      return;
    } else {
      setSelectedMessage({
        from: messageReceiver?.username,
        id: Number(largestIdOfMessages + 1),
        image: messageReceiver?.image,
        messages: [],
      });
      setOther({
        from: user.username,
        id: Number(largestIdOfMessages + 1),
        image: user.image,
        messages: [],
      });
    }
  };

  const asdd = () => {
    if (lütfen) {
      return;
    } else {
      setUser({
        ...user,
        chatMessages: [...user.chatMessages, selectedMessage],
      });
      setMessageReceiver({
        ...messageReceiver,
        chatMessages: [...messageReceiver.chatMessages, other],
      });
    }
  };

  useEffect(() => {
    const receiver = allUsers.filter(
      (us) => us.username === selectedMessage?.from
    );
    if (!lütfen) {
      setMessageReceiver(newReceiver);
    } else {
      setMessageReceiver(receiver[0]);
    }
  }, [setMessageReceiver, selectedMessage, allUsers, newReceiver, lütfen]);

  return (
    <div className="w-screen h-fit flex justify-center font-mono">
      <div className="bg-slate-300 p-4 mt-16 rounded-lg w-1/2">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <Link
              to="/messages"
              className="text-5xl text-red-900 ml-1 font-bold"
            >
              &larr;
            </Link>
            <h1 className="text-2xl font-bold ml-auto mr-auto text-green-950">
              Start a New Chat
            </h1>
          </div>
          <span className="border-b border-slate-500 w-full p-1"></span>
        </div>
        <div className="p-2">
          <div className="relative">
            <button onClick={handleDropDown} className="font-bold text-lg mt-2">
              Select Recipient <span className="text-xl">&darr;</span>
            </button>
            {isDropped && (
              <div className="flex flex-col items-start justify-center absolute bg-slate-900 text-slate-50 p-4 rounded-lg -left-4">
                {allUsers.map((us, i) => {
                  return (
                    <Link
                      id={us.username}
                      className="bg-slate-700 mb-1 pl-2 pr-2 rounded-md"
                      key={us.id}
                      onClick={handleSelect}
                    >
                      {i + 1}. {us.username}
                      {us.username === user?.username ? " (you)" : ""}{" "}
                      {messageReceiver?.username === us.username ? " + " : ""}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <button onClick={asd}>1.</button>
          <Link to={`/messages/${Number(selectedMessage?.id)}`} onClick={asdd}>
            2.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
