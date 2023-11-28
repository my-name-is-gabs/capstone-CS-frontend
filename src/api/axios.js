import axios from "axios";
import { BASE_URL } from "../constant";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
