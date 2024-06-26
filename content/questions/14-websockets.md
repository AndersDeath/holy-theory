---
title: Websockets
tags: ["question", "interview", "theory"]
languages: [""]
---

# Websocket

WebSocket is a communication protocol that provides full-duplex, bidirectional communication channels over a single TCP connection. It is designed to enable real-time, interactive communication between a client (typically a web browser) and a server. WebSocket is often used in web applications and other scenarios where low-latency, efficient communication is required.

Here's how WebSocket works:

1. **Handshake**: WebSocket communication begins with an initial handshake. This handshake is an HTTP request from the client to the server, usually in the form of a standard HTTP GET request. However, it includes an additional `Upgrade` header field with a value of "websocket" to indicate that the client wants to establish a WebSocket connection. The server must also support WebSocket and, if it does, it responds with a status code of 101 (Switching Protocols) to confirm the upgrade.

2. **WebSocket Connection Established**: Once the handshake is successful, the connection is upgraded from HTTP to WebSocket. From this point onward, the communication occurs over a single, persistent TCP connection, eliminating the need for repeated HTTP requests and responses.

3. **Data Exchange**: With the WebSocket connection established, both the client and server can send data to each other at any time, without the need for a request-response pattern. Data is sent as frames, which can be either text or binary. Each frame includes an opcode to indicate its type (e.g., text, binary, close, ping, pong), the payload data, and other control bits for framing.

4. **Full-Duplex Communication**: WebSocket supports full-duplex communication, meaning both the client and server can send messages independently without waiting for a response. This real-time, bidirectional communication makes it suitable for interactive applications, such as chat applications, online gaming, and live updates.

5. **Keep-Alive and Ping/Pong**: WebSocket includes built-in mechanisms for keeping the connection alive and detecting if it's still active. Periodically, one party may send a ping frame, and the other must respond with a pong frame. If one party fails to receive a pong response within a specified timeout, it can assume the connection is lost and take appropriate action.

6. **Close Connection**: Either party can initiate the closing of the WebSocket connection by sending a close frame. This allows for a graceful termination of the connection, and both sides can perform cleanup operations before disconnecting.

WebSocket offers several advantages over traditional HTTP communication for real-time applications, as it eliminates the overhead of repeated HTTP requests and reduces latency. It is widely used in web development, online gaming, financial trading platforms, and any application that requires low-latency, bi-directional communication between a client and server. Additionally, WebSocket libraries and APIs are available for various programming languages, making it relatively easy to implement in web and mobile applications.
