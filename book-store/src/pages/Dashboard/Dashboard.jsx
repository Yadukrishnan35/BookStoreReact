import React, { useEffect, useState } from 'react';
import Displaybook from '../../components/books/Displaybook';
import Header from '../../components/header/Header';
import BookService from '../../services/BookService';
import GetBookById from '../GetBookById/GetBookById';
import './Dashboard.css';
const bookService = new BookService();

function Dashboard(props) {
    const [view, setView] = useState(false);
    const [bookArray, setBookArray] = useState([]);
    const [selectedBook, setSelectedBook] = useState("");

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = () => {
        bookService.getAllBooks().then((response)=> {
                console.log(response);
                setBookArray(response.data.books)
        }).catch((error) =>{
            console.log(error);
        })

    }

    return (
        <>
            <Header/>
            
    {/* {view ? */}

            
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

            {bookArray.length>0 && bookArray.map((book,index)=> (
                <Displaybook key={index} bookArray={book} getBooks={getBooks} />
            
            ))}
       
        </div>
        </div>
        
                
     </>
    );
}

export default Dashboard;