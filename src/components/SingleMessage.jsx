import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const SingleMessage = () => {
  const {
    user,
    selectedMessage,
    setMessage,
    message,
    setSelectedMessage,
    messageReceiver,
    setMessageReceiver,
    setUser,
    deneme,
    lütfen,
    allUsers
  } = useContext(UserContext);

  const [divHeight, setDivHeight] = useState(0)


  useEffect(() => {
    if(selectedMessage.messages.length !== 0) {
      selectedMessage?.messages.map((mes) => mes.isRead = true)
    } else {
      return;
    }
  }, [selectedMessage])


  useEffect(() => {
    const receiver = allUsers.filter((us) => us.username === selectedMessage?.from)[0]
    if(lütfen) {
      setMessageReceiver(receiver)
    } else {
      return
    }
  },[setMessageReceiver, selectedMessage, allUsers, user, lütfen])


  const handleMessageChange = (e) => {
    setMessage({
      id: selectedMessage?.messages.length === 0 ? 1 : selectedMessage?.messages.length + 1,
      type: "sent",
      sentFrom: user?.username,
      sentTo: selectedMessage?.from,
      isRead: true,
      message: e.target.value,
    });
  };

  useEffect(() => {
    const div = document.querySelector('#chat-div')
    setDivHeight(div?.scrollHeight)
  },[])

  useEffect(() => {
    const div = document.querySelector('#chat-div')
      div.scrollTo(0, divHeight)

  }, [divHeight])


  const messageInput = document.querySelector("#message-input");
  
  useEffect(() => {
    const div = document.querySelector("#chat-div");
    const height = div?.scrollHeight;
    div?.scrollTo(0, height);
  }, []);

  
  const handleSendMessage = useCallback(() => {
    if (message?.message?.length === 0) {
      return;
    } else {
      setSelectedMessage({
        ...selectedMessage,
        messages: [...selectedMessage.messages, message],
      });
      setUser({
        ...user,
        chatMessages: [
          ...user.chatMessages,
          (user.chatMessages.find(
            (obj) => Number(obj.id) === Number(selectedMessage.id)
          ).messages = [
            ...user.chatMessages.find(
              (obj) => Number(obj.id) === Number(selectedMessage.id)
            ).messages,
            message,
          ]),
        ].slice(0, user.chatMessages.length),
      });
      setMessageReceiver({
        ...messageReceiver,
        chatMessages: [
          ...messageReceiver.chatMessages,
          (messageReceiver.chatMessages.find(
            (obj) => Number(obj.id) === Number(selectedMessage.id)
          ).messages = [
            ...messageReceiver.chatMessages.find(
              (obj) => Number(obj.id) === Number(selectedMessage.id)
            ).messages, {...message, isRead: false}
          ]),
        ].slice(0, messageReceiver.chatMessages.length),
      });

      setDivHeight(divHeight + 1)

    }
    setMessage({
      id: '',
      type: "sent",
      sentFrom: "",
      sentTo: "",
      isRead: true,
      message: "",
    });
    messageInput.value = "";
  }, [
    user,
    selectedMessage,
    setSelectedMessage,
    setUser,
    message,
    setMessage,
    messageInput,
    messageReceiver,
    setMessageReceiver,
    divHeight,
  ]);

  useEffect(() => {
    if (message?.message?.length === 0) {
      messageInput?.focus();
    } else {
      return;
    }
  }, [message, messageInput]);


  useEffect(() => {
    const asd = (e) => {
      if (e.key === "Enter") {
        handleSendMessage();
      } else {
        return;
      }
    };
    document.addEventListener("keypress", asd);

    return () => document.removeEventListener("keypress", asd);
  }, [handleSendMessage]);

  return (
    <div className="w-screen flex justify-center font-mono h-screen">
      <div className="flex flex-col bg-slate-300 w-1/2 h-3/4 p-4 mt-16 rounded-lg">
        <div className="border-b border-slate-400 p-2 flex flex-row items-center gap-2">
          <Link to="/messages" className="text-4xl text-slate-800 mr-2">
            <span>&larr;</span>
          </Link>
          <p className="font-bold text-lg">Chat with {selectedMessage?.from}</p>
        </div>
        <div id="chat-div" className="h-3/4 overflow-scroll">
          {(selectedMessage?.messages)?.map((mes, i) => {
            return (
              <div key={i} id="messi">
                <div
                  id={`message-${mes.id}`}
                  className={`flex mt-4 flex-col w-fit relative ${
                    mes.sentFrom === user.username
                      ? "items-start bg-green-900 rounded-lg text-slate-50 p-2 mr-auto"
                      : "items-end bg-slate-800 text-slate-50 rounded-lg p-2 ml-auto"
                  }`}
                >
                  <div
                    className={`absolute ${
                      mes.sentFrom === user.username ? "left-0 -top-3" : "right-0 -top-3"
                    }`}
                  >
                    <img
                      src={
                        mes.sentFrom === user.username
                          ? `${user?.image}`
                          : `${selectedMessage?.image.length !== 0 ? selectedMessage?.image : deneme?.image}`
                      }
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <p className="">{mes.message}</p>
                <div className="absolute left-1 top-1">{mes.isRead ? '' : <p className="w-2 h-2 rounded-full bg-slate-50"></p>}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="mt-4">
            <input
              type="text"
              id="message-input"
              placeholder="send a message"
              className="h-12 p-1 text-lg rounded-l-lg w-3/4"
              onChange={handleMessageChange}
            />
            <button
              className="h-12 bg-green-900 text-slate-50 p-2 pl-4 pr-4 rounded-r-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;
