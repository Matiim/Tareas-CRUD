import axios from "./axios";

export const getTasksRequest = () => axios.get(`/api/tasks`);

export const getTaskRequest = (id) => axios.get(`/api/tasks/${id}`);

export const createTasksRequest = (tasks) => axios.post(`/api/tasks`,{ withCredentials: true },tasks);

export const updateTasksRequest = (id,tasks) => axios.put(`/api/tasks/${id}`, tasks);

export const deleteTasksRequest = (id) => axios.delete(`/api/tasks/${id}`);