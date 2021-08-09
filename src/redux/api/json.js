  
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3006/",
  //baseURL: 'http://35.246.148.192:8085/mediatorApi',
  headers: {
    "Content-type": "application/json"
  }
});