import axios from "axios";

const instance = axios.create({
  baseURL: "https://tareas-crud-jy74.onrender.com",
  withCredentials: true,
});

export default instance;