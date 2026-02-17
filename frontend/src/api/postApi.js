import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? "/api/post" : "http://localhost:3000/api/post");

export const fetch = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const addPost = async (post) => {
    const response = await axios.post(API_URL, post);
    return response.data;
}

export const deletePost = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}

export const updatePost = async (id, post) => {
    const response = await axios.put(`${API_URL}/${id}`, post);
    return response.data;
}
