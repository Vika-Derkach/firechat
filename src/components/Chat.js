import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import SendMessages from "./SendMessages";
import SignOut from "./SignOut";

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(messages);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => {
          return (
            <div>
              <div
                key={id}
                className={`msg ${
                  uid === auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <SendMessages scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
