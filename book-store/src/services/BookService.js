import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://127.0.0.1:8000/api';

const header = {
    headers : {
        Authorization : 'Bearer' + " " + localStorage.getItem('token'),
        'Content-type': 'application/json',
       
    }
}


class BookService {
    getAllBooks() {
        return axiosService.get(`${baseURL}/displayAllBooks`,header)
    }

    getBookById(data) {
        return axiosService.post(`${baseURL}/getBookById`,data,header)
    }
}

export default BookService;