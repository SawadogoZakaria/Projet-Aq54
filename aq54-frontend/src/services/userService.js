import axios from 'axios';

const API_URL = 'http://localhost:3001/users';

export const getAllUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`${API_URL}/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const activateUser = async (id) => {
  const response = await axios.put(`${API_URL}/${id}/activate`);
  return response.data;
};

export const deactivateUser = async (id) => {
  const response = await axios.put(`${API_URL}/${id}/deactivate`);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials); // Ajout de la méthode de connexion
  return response.data;
};
