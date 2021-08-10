  
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3006/",
  // baseURL: "http://35.234.121.245:3006/",
  headers: {
    "Content-type": "application/json"
  }
});