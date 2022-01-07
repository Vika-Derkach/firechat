import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import SendMessages from "./SendMessages";
import SignOut from "./SignOut";

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <SignOut />

      {messages.map(({ id, text, photoUrl }) => {
        return (
          <div key={id}>
            <img src={photoUrl} alt="" />
            <p>{text}</p>
          </div>
        );
      })}
      <SendMessages />
    </div>
  );
}

export default Chat;
