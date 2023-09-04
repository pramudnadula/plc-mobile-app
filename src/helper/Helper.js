import axios from "axios";

const Link = "http://192.168.8.128";
const Port = "8070";

export const BASE_URL_NODE = `${Link}:${Port}/api/`;

// Function to set the authorization token in the request headers
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// GET request
export const GET = (url, params = {}, token = null) => {
  setAuthToken(token);
  console.log(`${BASE_URL}${url}`);

  return axios.get(`${BASE_URL}${url}`, { params });
};

// POST request
export const POST = (url, data = {}, token = null) => {
  setAuthToken(token);
  return axios.post(`${BASE_URL}${url}`, data);
};

// PUT request
export const PUT = (url, data = {}, token = null) => {
  setAuthToken(token);
  return axios.put(`${BASE_URL}${url}`, data);
};

// DELETE request
export const DELETE = (url, token = null) => {
  setAuthToken(token);
  return axios.delete(`${BASE_URL}${url}`);
};
