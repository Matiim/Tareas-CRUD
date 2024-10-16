import axios from "axios";

const instance = axios.create({
  baseURL: "https://tareas-crud-f2sl.onrender.com/api",
  withCredentials: true,
});

export default instance;