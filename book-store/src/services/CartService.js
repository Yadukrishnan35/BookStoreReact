import AxiosService from "./AxiosService";

let baseURL = 'http://127.0.0.1:8000/api';
const axiosService = new AxiosService();
const header = {
    headers: {
        Authorization: 'Bearer' + " " + localStorage.getItem('token')
    }
}
class CartService {
    addBookToCart(data) {
        return axiosService.post(`${baseURL}/addBookToCartByBookId`, data, header)
    }

    incrementCartQuanitity(data) {
        return axiosService.post(`${baseURL}/increamentBookQuantityInCart`, data, header)
    }

    decrementCartQuanitity(data) {
        return axiosService.post(`${baseURL}/decrementBookQuantityInCart`, data, header)
    }


    // deleteBookFromCart(data) {
    //     return axiosService.delete(`${baseURL}/deleteBookByCartId`, data, header)
    // }

    deleteBookFromCart=(data)=>{
        let response = axiosService.put(`${baseURL}/deleteBookByCartId`, data, header)
        return response;
    }
    getAllBooksFromCart() {
        // const headers = header();
        return axiosService.get(`${baseURL}/getAllBooksInCart`, header)
    }

    addBookToWishlist(data) {
        return axiosService.post(`${baseURL}/addBookToWishlistByBookId`, data, header)
    }

    deleteBookFromWishlist=(data)=>{
        let response = axiosService.put(`${baseURL}/deleteBookByWishlistId`, data, header)
        return response;
    }

    getAllBooksFromWishlist() {
       
        return axiosService.get(`${baseURL}/getAllBooksInWishlist`, header)
    }

}

export default CartService;