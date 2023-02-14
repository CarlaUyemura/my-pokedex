import axios from "axios";

const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

export const requestGet = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}