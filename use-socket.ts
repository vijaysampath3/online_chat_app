import { io, Socket } from "socket.io-client";
import { create } from "zustand";

const BASE_URL = import.meta.env.MODE === "development" ? import.meta.env.VITE_API_URL : "/";

interface SocketState{
    socket:Socket | null;
    onlineUsers:string[];
    connectSocket:()=>void;
    disconnectSocket:()=>void;
}

export const useSocket = create<SocketState>()((set,get)=>({
    socket:null,
    onlineUsers:[],
}))