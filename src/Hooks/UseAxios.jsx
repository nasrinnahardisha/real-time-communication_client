import axios from "axios";

const asioxInstance = axios.create({
  baseURL: "https://real-time-communication-server-w1r7.onrender.com",
});

const UseAxios = () => {
  return asioxInstance;
};
export default UseAxios;
