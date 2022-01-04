// Axios is a library that serves to create HTTP requests to external APIs
import axios from "axios";

export default axios.create({
  baseURL: "http://www.omdbapi.com/",
});
