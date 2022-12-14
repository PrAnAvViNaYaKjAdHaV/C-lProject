import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import Message from "../Message/Message";
import './Messages.style.scss'
const Messages = () => {
  const [messages, setMessaages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessaages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);
  return (
    <div className="messages">
      {messages.map((message) => (
        <Message message={message} key={message.id}/>
      ))}
    </div>
  );
};

export default Messages;
