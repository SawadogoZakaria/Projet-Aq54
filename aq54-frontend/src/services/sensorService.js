import axios from 'axios';

const API_URL = 'http://localhost:3001/sensors';

export const getAllSensors = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getSensorData = async (id, startDate, endDate, aggregationType) => {
  const response = await axios.get(`${API_URL}/${id}/data`, {
    params: { startDate, endDate, aggregationType },
  });
  return response.data;
};

export const getCurrentValues = async (id) => {
  const response = await axios.get(`${API_URL}/${id}/current`);
  return response.data;
};

export const getStationStatus = async (id) => {
  const response = await axios.get(`${API_URL}/${id}/status`);
  return response.data;
};

export const syncData = async (id, startDate, endDate) => {
  const response = await axios.get(`${API_URL}/${id}/sync`, {
    params: { startDate, endDate },
  });
  return response.data;
};

export const getStations = async (projectName) => {
  const response = await axios.get(`${API_URL}/project/${projectName}`);
  return response.data;
};

export const getSessionInfo = async (projectName) => {
  const response = await axios.get(`${API_URL}/project/${projectName}/info`);
  return response.data;
};