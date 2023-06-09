const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
const bodyParser = require("body-parser");

const WebSocket = require("ws");
const app = express();
const PORT = process.env.PORT || 3001;

const server = new WebSocket.Server(
  {
    port: 8080,
  },
  () => {
    console.log("Server started on port 8080");
  }
);

app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json({ limit: "16mb", extended: true })); //
app.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));

app.use(routes);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
const users = new Set();

function sendMessage(message) {
  users.forEach((user) => {
    user.ws.send(JSON.stringify(message));
  });
}
server.on("connection", (ws) => {
  const userRef = {
    ws,
  };
  users.add(userRef);

  ws.on("message", (message) => {
    console.log(message);
    try {
      // Parsing the message
      const data = JSON.parse(message);

      // Checking if the message is a valid one

      if (
        // typeof data.sender !== 'string' ||
        typeof data.body !== "string"
      ) {
        console.error("Invalid message");
        return;
      }

      // Sending the message

      const messageToSend = {
        sender: data.sender,
        body: data.body,
        sentAt: Date.now(),
      };

      sendMessage(messageToSend);
    } catch (e) {
      console.error("Error passing message!", e);
    }
  });

  ws.on("close", (code, reason) => {
    users.delete(userRef);
    console.log(`Connection closed: ${code} ${reason}!`);
  });
});
