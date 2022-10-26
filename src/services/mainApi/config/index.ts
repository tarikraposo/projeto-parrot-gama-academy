import axios from "axios";

const baseAPI = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json"
  }
})

export default baseAPI