import axios from "../httpClient";

export const getUsers = () => axios.get(`/api/users`);
export const getUser = (userId) => axios.get(`/api/users/${userId}`);
export const createUser = (data) => axios.post(`/api/users`, data);
export const updateUser = (data) => axios.post(`/api/users/${userId}`, data);
export const deleteUser = (userId) => axios.delete(`/api/users/${userId}`);
