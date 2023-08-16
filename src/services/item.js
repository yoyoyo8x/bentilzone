import axios from "axios";
import { url } from "./api"

export const getallItem = async (id) => {
  id = id || "";
  return await axios.get(`${url}/item/${id}`);
};

export const addItem = async (Item) => {
  const token = localStorage.getItem('accessToken')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return await axios.post(`${url}/item/`, Item, config);
};

export const editItem = async (id, Item) => {
  return await axios.put(`${url}/item/${id}`, Item);
};

export const deleteItem = async (id) => {
  return await axios.delete(`${url}/item/${id}`);
};
