import axios from "axios";

const doctorProfileAPI = axios.create({
  baseURL: "https://api.allodoc.md/users/user",
});

export default doctorProfileAPI;