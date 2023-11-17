import axios from "axios";
import { BASE_URL, API_TIMEOUT } from "../constant";

export default axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
