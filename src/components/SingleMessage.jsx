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
    allUsers,
    bişey,
  } = useContext(UserContext);

  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    if (selectedMessage.messages.length !== 0) {
      selectedMessage?.messages.map((mes) => (mes.isRead = true));
    } else {
      return;
    }
  }, [selectedMessage]);

  useEffect(() => {
    const receiver = allUsers.filter(
      (us) => us.username === selectedMessage?.from
    )[0];
    if (lütfen) {
      setMessageReceiver(receiver);
    } else {
      return;
    }
  }, [setMessageReceiver, selectedMessage, allUsers, user, lütfen]);

  const messageIdArray = [
    bişey[0]?.chatMessages?.filter((mes) => mes.from === user.username)[0]
      ?.messages?.length === undefined
      ? 0
      : bişey[0]?.chatMessages?.filter((mes) => mes.from === user.username)[0]
          ?.messages?.length,
    selectedMessage.messages.length,
  ];

  const handleMessageChange = (e) => {
    setMessage({
      id:
        selectedMessage?.messages.length === 0
          ? 1
          : Math.max(...messageIdArray) + 1,
      type: "sent",
      sentFrom: user?.username,
      sentTo: selectedMessage?.from,
      isRead: true,
      message: e.target.value,
    });
  };

  useEffect(() => {
    const div = document.querySelector("#chat-div");
    setDivHeight(div?.scrollHeight);
  }, []);

  useEffect(() => {
    const div = document.querySelector("#chat-div");
    div.scrollTo(0, divHeight);
  }, [divHeight]);

  const messageInput = document.querySelector("#message-input");

  useEffect(() => {
    const div = document.querySelector("#chat-div");
    const height = div?.scrollHeight;
    div?.scrollTo(0, height);
  }, []);

  const handleSendMessage = useCallback(() => {
    if (message?.message?.length === 0) {
      return;
    } else if (
      messageReceiver?.chatMessages?.filter((mes) => mes.from === user.username)
        .length !== 0
    ) {
      setSelectedMessage({
        ...selectedMessage,
        updatedAt: Date.now(),
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
            ).messages,
            { ...message, isRead: false },
          ]),
        ].slice(0, messageReceiver.chatMessages.length),
      });
      setDivHeight(divHeight + 1);
    } else {
      setSelectedMessage({
        ...selectedMessage,
        updatedAt: Date.now(),
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
      messageReceiver.chatMessages = [
        ...messageReceiver.chatMessages,
        {
          from: user.username,
          id: user?.chatMessages?.filter(
            (mes) => mes.from === messageReceiver.username
          )[0].id,
          image: user.image,
          messages: [],
        },
      ];
      setMessageReceiver({
        ...messageReceiver,
        chatMessages: [
          ...messageReceiver.chatMessages,
          (messageReceiver.chatMessages.find(
            (obj) => Number(obj.id) === Number(selectedMessage.id)
          ).messages = [
            ...messageReceiver.chatMessages.find(
              (obj) => Number(obj.id) === Number(selectedMessage.id)
            ).messages,
            { ...message, isRead: false },
          ]),
        ].slice(0, messageReceiver.chatMessages.length),
      });
      setDivHeight(divHeight + 1);
    }
    setMessage({
      id: "",
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

  useEffect(() => {
    user.chatMessages.filter(
      (obj) => Number(obj.id) === Number(selectedMessage.id)
    )[0].updatedAt = selectedMessage.updatedAt;
    if (
      selectedMessage.updatedAt !== undefined &&
      messageReceiver.chatMessages.filter(
        (obj) => Number(obj.id) === Number(selectedMessage.id)
      ).length !== 0
    ) {
      messageReceiver.chatMessages.filter(
        (obj) => Number(obj.id) === Number(selectedMessage.id)
      )[0].updatedAt = selectedMessage?.updatedAt;
    } else {
      return;
    }
  }, [user, selectedMessage, messageReceiver]);

  return (
    <div className="w-screen flex justify-center font-mono h-screen">
      <div className="flex flex-col bg-slate-300 w-1/2 h-3/4 p-4 mt-16 rounded-lg">
        <div className="border-b border-slate-400 p-2 flex flex-row items-center gap-2">
          <Link to="/messages" className="text-4xl text-slate-800 mr-2">
            <span>&larr;</span>
          </Link>
          <p className="font-bold text-lg sms:text-sm">
            Chat with {selectedMessage?.from}
          </p>
        </div>
        <div id="chat-div" className="h-3/4 overflow-scroll">
          {selectedMessage?.messages?.map((mes, i) => {
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
                      mes.sentFrom === user.username
                        ? "left-0 -top-3 xss:-top-1"
                        : "right-0 -top-3 xss:-top-1"
                    }`}
                  >
                    <img
                      src={
                        mes.sentFrom === user.username
                          ? `${user?.image}`
                          : `${
                              selectedMessage?.image.length !== 0
                                ? selectedMessage?.image
                                : deneme?.image
                            }`
                      }
                      alt=""
                      className="w-6 h-6 rounded-full xss:w-4 xss:h-4"
                    />
                  </div>
                  <p className="mmd:text-sm sms:text-xs">{mes.message}</p>
                  <div className="absolute left-1 top-1">
                    {mes.isRead ? (
                      ""
                    ) : (
                      <p className="w-2 h-2 rounded-full bg-slate-50"></p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          <div className="mt-4">
            <input
              type="text"
              id="message-input"
              placeholder="send a message"
              className="h-12 p-1 text-lg rounded-l-lg mmd:h-10 w-5/6 llg:w-3/4 mmd:w-2/3 sms:text-md ssm:text-sm ssm:h-8 ssm:pb-0 xss:h-6 xss:text-xs xss:p-0 xss:pl-1"
              onChange={handleMessageChange}
            />
            <button
              className="h-12 w-24 mmd:w-20 text-xl font-bold bg-green-900 mmd:h-10 ssm:h-8 text-slate-50 sms:text-lg p-2 pl-4 pr-4 rounded-r-lg mmd:p-1 mmd:pl-2 mmd:pr-2 sms:pl-1 sms:pr-1 sms:w-16 ssm:p-0 ssm:w-14 xss:w-10 xss:h-6 xss:text-xs"
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
