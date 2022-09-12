import AxiosService from "./AxiosService";

const axiosService = new AxiosService();
let baseURL = "http://127.0.0.1:8000/api"
class UserService {

        signUp(data) {
            return axiosService.post(`${baseURL}/register`,data);
        }
}

export default UserService;