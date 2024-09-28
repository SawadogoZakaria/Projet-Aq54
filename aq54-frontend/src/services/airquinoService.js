import axios from 'axios';

const API_URL = 'http://localhost:3001/airqino';

export const getCurrentValues = async (stationName) => {
  const response = await axios.get(`${API_URL}/getCurrentValues/${stationName}`);
  return response.data;
};

export const getHourlyAvg = async (stationName, dtFrom, dtTo) => {
  const response = await axios.get(`${API_URL}/getHourlyAvg/${stationName}/${dtFrom}/${dtTo}`);
  return response.data;
};

export const getLastValuesRaw = async (stationName) => {
  const response = await axios.get(`${API_URL}/getLastValuesRaw/${stationName}`);
  return response.data;
};

export const getRange = async (stationName, dtFrom, dtTo) => {
  const response = await axios.get(`${API_URL}/getRange/${stationName}/${dtFrom}/${dtTo}`);
  return response.data;
};

export const getSessionInfo = async (projectName) => {
  const response = await axios.get(`${API_URL}/getSessionInfo/${projectName}`);
  return response.data;
};

export const getSingleDay = async (stationName, dtFrom) => {
  const response = await axios.get(`${API_URL}/getSingleDay/${stationName}/${dtFrom}`);
  return response.data;
};

export const getStationStatus = async (stationId) => {
  const response = await axios.get(`${API_URL}/getStationStatus/${stationId}`);
  return response.data;
};

export const getStations = async (projectName) => {
  const response = await axios.get(`${API_URL}/getStations/${projectName}`);
  return response.data;
};

export const getStationHourlyAvg = async (stationId) => {
  const response = await axios.get(`${API_URL}/v3/getStationHourlyAvg/${stationId}`);
  return response.data;
};