import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io(
      "https://real-time-communication-server-w1r7.onrender.com",
      {
        withCredentials: true,
      },
    );

    socketInstance.on("connect", () => {
      console.log("⚡ Connected to WebSocket Server:", socketInstance.id);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
