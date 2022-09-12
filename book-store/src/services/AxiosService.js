import axios from "axios";
class AxiosService {
    post(url,data="",headers) {
        return axios.post(url,data,headers)
    }
}
export default AxiosService;