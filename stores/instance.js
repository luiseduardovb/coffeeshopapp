import axios from "axios";

const instance = axios.create({
  baseURL: "https://damp-scrubland-59708.herokuapp.com/",

  // "http://localhost:8000"
});

export default instance;
