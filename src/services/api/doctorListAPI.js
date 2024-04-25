import axios from "axios";

const doctorListAPI = axios.create({
  baseURL: "https://api.allodoc.md/users/get-doctors",
});

export default doctorListAPI;