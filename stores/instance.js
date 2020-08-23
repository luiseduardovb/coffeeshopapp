import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",

  //  baseURL: "https://damp-scrubland-59708.herokuapp.com/"
});

export default instance;
