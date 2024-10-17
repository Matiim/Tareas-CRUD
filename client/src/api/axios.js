import axios from "axios";

const instance = axios.create({
  baseURL: "https://tareas-crud-f2sl.onrender.com",
  withCredentials: true,
});

export default instance;