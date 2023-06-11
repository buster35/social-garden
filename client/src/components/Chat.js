import "./chat.css";
import React, { useState, useEffect, useRef } from "react";
import { useUserContext } from "../ctx/UserContext";
import Button from "react-bootstrap/Button";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [connection, setConnection] = useState(false);
  const [messageBody, setMessageBody] = useState();

  const { currUser } = useUserContext();

  console.log({ currUser });

  const ws = useRef();

  const sendMessage = () => {
    if (messageBody) {
      ws.current.send(
        JSON.stringify({
          sender: currUser.data.username,
          body: messageBody,
        })
      );
      setMessageBody("");
      console.log(messageBody);
    }
  };

  useEffect(() => {
    // var host = location.origin.replace(/^http/, "ws");
    // this.connection = new WebSocket(host);
    // ws.current = new WebSocket(host);
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => {
      console.log("Chat connection opened");
      setConnection(true);
    };

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((_messages) => [..._messages, data]);
    };

    return () => {
      console.log("Cleaning up...");
      ws.current.close();
    };
  }, []);

  const scrollTarget = useRef(null);

  useEffect(() => {
    if (scrollTarget.current) {
      scrollTarget.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  return (
    <div>
      <h5>Live Chat</h5>
    <div className="chat-container">
      
      <br></br>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender} at
            {new Date(message.sentAt).toLocaleTimeString(undefined, {
              timeStyle: "short",
            })}{" "}
            {message.body}
          </div>
        ))}
        <div ref={scrollTarget} />
      </div>

      {/* <p>
          You are chatting as {currUser.data.username}
        </p> */}

      <div className="chat-input">
        <input
          id="message"
          type="text"
          name="message"
          placeholder="Type your message here..."
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
          required
        />
        <br></br>
        <br></br>
        <Button
          aria-label="Send"
          type="send"
          variant="light"
          onClick={sendMessage}
        >
          Send
        </Button>
      </div>
    </div>
    </div>
  );
}

export default ChatPage;
