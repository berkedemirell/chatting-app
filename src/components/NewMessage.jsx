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
  const [error, setError] = useState("");
  const [go, setGo] = useState(false);
  
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

  const handleGo = () => {
    if (lütfen) {
      setGo(true)
      return;
    } else if (messageReceiver.username === undefined) {
      setError("You Must Select a Recipient First. Fucking idiot.");
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
      setGo(true);
    }
  };

  const handleProceed = () => {
    if (lütfen) {
      return;
    } else if (messageReceiver.username === undefined) {
      setError("You Must Select a Recipient First. Fucking idiot.");
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
      setError("");
    } else {
      setMessageReceiver(receiver[0]);
      setError("");
    }
  }, [setMessageReceiver, selectedMessage, allUsers, newReceiver, lütfen]);


  return (
    <div className="w-screen h-fit flex justify-center font-mono relative">
      {error.length !== 0 && (
        <div className="absolute left-2 top-2 rounded-md w-52 errorAnimation bg-red-900">
          <p className="text-slate-50 p-2 font-bold">{error}</p>
        </div>
      )}
      <div className="bg-slate-300 p-4 mt-16 rounded-lg w-1/2 pb-16 relative">
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
          <div className="relative text-center">
            <button
              onClick={handleDropDown}
              className="font-bold text-xl mt-2 bg-emerald-900 text-slate-50 pr-4 pl-4 p-1 rounded-md"
            >
              Select Recipient <span className="text-2xl">&darr;</span>
            </button>
            {isDropped && (
              <div className="flex flex-col items-start justify-center absolute bg-slate-900 text-slate-50 p-4 rounded-lg left-36">
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
          <div className="text-center mt-4">
            <button
              onClick={handleGo}
              className="font-bold text-xl bg-green-900 text-slate-50 p-1 pl-8 pr-8 rounded-md"
            >
              Go
            </button>
          </div>
          {go && (
            <div className="w-80 border border-slate-900 p-2 rounded-md absolute left-44 bottom-12 bg-slate-950">
              <div className="pl-4 pr-4">
                {!lütfen ? (
                  <p className="text-slate-50">
                    You are about to start a chat with{" "}
                    <span className="font-bold">
                      {messageReceiver.username}
                    </span>
                    . Do you want to proceed?
                  </p>
                ) : (
                  <p className="text-slate-50">
                    You have already have a conversation started with{" "}
                    <span className="font-bold">
                      {messageReceiver.username}
                    </span>
                    . Do you want to see the chat?
                  </p>
                )}
              </div>
              <div className="flex flex-row items-center justify-between pl-20 pr-20 mt-2">
                <Link
                  to={
                    messageReceiver.username === undefined
                      ? "/create"
                      : `/messages/${Number(selectedMessage?.id)}`
                  }
                  onClick={handleProceed}
                  className="bg-green-900 text-slate-50 pl-4 pr-4 p-1 rounded-md"
                >
                  Yes
                </Link>
                <button
                  onClick={() => setGo(false)}
                  className="bg-red-900 text-slate-50 pl-4 pr-4 p-1 rounded-md"
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
