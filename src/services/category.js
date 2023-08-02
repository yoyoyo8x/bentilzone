import axios from "axios";
import {url} from "./api"

export const getallCategory = async (id)=>{
    id=id || "";
    return await axios.get(`${url}/category/${id}`);
};

export const addCategory = async (category) => {
    return await axios.post(`${url}/category/`, category);
  };
  
  export const editCategory = async (id, category) => {
    return await axios.put(`${url}/category/${id}`, category);
  };
  
  export const deleteCategory = async (id) => {
    return await axios.delete(`${url}/category/${id}`);
  };
