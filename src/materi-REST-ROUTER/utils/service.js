import Axios from "axios";

const httpService = Axios.create({
  baseURL: "https://64858adca795d24810b70eeb.mockapi.io",
});

export default httpService;
