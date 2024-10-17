import axios from "./axios";

export const getTasksRequest = () => axios.get(`/api/tasks`);

export const getTaskRequest = (id) => axios.get(`/api/tasks/${id}`);

export const createTasksRequest = (task) => axios.post(`/api/tasks`,task);

export const updateTasksRequest = (id,task) => axios.put(`/api/tasks/${id}`,task);

export const deleteTasksRequest = (id) => axios.delete(`/api/tasks/${id}`);