import AxiosService from "./AxiosService";

let baseURL = 'http://127.0.0.1:8000/api';

const header = {
    headers: {
        Authorization: 'Bearer' + " " + localStorage.getItem('token')
    }
}
class CartService {

}

export default CartService;