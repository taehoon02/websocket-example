let WebSocketServer = require("ws").Server;
let wss = new WebSocketServer({ port: 3000 });

// 연결이 수신되면 클라이언트에 메세지를 전송하고 클라이언트로부터의 메세지를 수신한다.
wss.on("connection", function(ws) {
  ws.send("Hello, I'm a server");
  ws.on("message", function(message) {
    console.log("Received: %s", message);
  });
});