import axios from "axios";
import { BASE_URL, API_TIMEOUT } from "../constant";

export default axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
