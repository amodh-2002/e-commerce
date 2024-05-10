import axios from "axios";
export const makeRequest = axios.create({
  baseURL: import.meta.env.REACT_APP_VITE_API_URL,
  headers: {
    Authorization: "bearer " + import.meta.env.REACT_APP_VITE_API_KEY,
  },
});
