import axios from "axios";
export const API_URL = "https://ncc-back.vercel.app/";

export async function loginUser(email: string, password: string) {
    const response = await axios.post(`${API_URL}/users/login`, {email, password})
    return response.data;
}

export async function createUser(email: string, password: string, name: string) {
    const response = await axios.post(`${API_URL}/users/create`, { email, password, name })
    return response.data;
}