import axios from "./axios";

export const getTasksRequest = () =>
  axios.get(`/api/tasks`, { withCredentials: true });

export const getTaskRequest = (id) => axios.get(`/api/tasks/${id}`);

export const createTasksRequest = (task) => {
  return axios.post("/api/tasks", task, {
    withCredentials: true, // Este debe ir como el tercer parámetro, en la configuración
  });
};

export const updateTasksRequest = (id, tasks) =>
  axios.put(`/api/tasks/${id}`, tasks);

export const deleteTasksRequest = (id) => axios.delete(`/api/tasks/${id}`);
