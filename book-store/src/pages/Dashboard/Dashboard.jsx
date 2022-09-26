import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Displaybook from '../../components/books/Displaybook';
import Header from '../../components/header/Header';
import usePagination from '../../components/pagination/pagination';
import BookService from '../../services/BookService';
import GetBookById from '../GetBookById/GetBookById';
import './Dashboard.css';
const bookService = new BookService();

function Dashboard(props) {
    const [view, setView] = useState(true);
    const [bookArray, setBookArray] = useState([]);
    //const [selectedBook, setSelectedBook] = useState("");
    const [bookdata, setBookdata] = useState("");
    const [page, setpage] = useState(1);
    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = () => {
        setView(true);
        bookService.getAllBooks().then((response)=> {
                console.log(response);
                setBookArray(response.data.books)
        }).catch((error) =>{
            console.log(error);
        })
    }

    const PER_PAGE = 8;

    var bookArrayLength = bookArray ? bookArray.length : 0;
    const pageCount = Math.ceil(bookArrayLength / PER_PAGE)
    const paginate = usePagination(bookArray, PER_PAGE)

    const changePage = (event, page) => {
        setpage(page);
        paginate.jump(page)
    };


    const listenToEachBook = (data) => {
       console.log("Listen to Book is calling..")
        setView(false)
        console.log(data);
        setBookdata(data);
        
        
    }
    


    // const getBookById = () => {
        
    //     let data = {
    //       "id": bookArray.id
    
    //     }
    
    //     console.log("GetBookById is calling");
    //     console.log(data);
    //     bookService.getBookById(data).then((response) => {
    //       console.log(response);
    //       setBookdata(response.data.book);
    //         setView(false);
    //         // navigate('/getBookByid')
    
    //     }).catch((error) => {
    //       console.log(error);
    //     })
    //   }


    return (
        <>
            <Header/>
            
    {view ?<div>

            
            <div className='Heading'>
                <span className='booksheading' style={{fontSize:20}}>Books({bookArray.length})</span>

                <select className='dropDownMenu'>
                    <option>Sort by relevance</option>
                    <option>Price:Low to High</option>
                    <option>Price:High to Low</option>
                    <option>Newest Arrivals</option>
                </select>
            </div>

            <div className='bookscontainer1' >
             
                <div className='getbooks' >

                {paginate.currentData() ? paginate.currentData().map((book, index) => (
                <Displaybook key={index} bookArray={book} getBooks={getBooks} listenToEachBook={listenToEachBook} />
                
            )):"No Books Available"}
                
        </div>
        </div>
       </div>:<GetBookById bookdata= {bookdata}/>} 

       <div className='pagination' >
                <Pagination count={pageCount} page={page} onChange={changePage} variant="outlined" shape="rounded" />
            </div>
                
     </>
    );
}

export default Dashboard;