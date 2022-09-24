import React, { useEffect, useState } from 'react';
//import apjbook from '../../Images/apjbook.png';
//import StarOutlineIcon from '@mui/icons-material/StarOutline';
//import DashBar from '../dashboard/DashBar';
//import apjbook from '../../Images/apjbook.jpg'
//import { BsStarFill } from 'react-icons/bs';
import './Displaybook.css';
import { AiFillStar } from 'react-icons/ai';
import BookService from '../../services/BookService';
import { useNavigate } from 'react-router-dom';
import bookImage from '../../Images/bookImage.png';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import GetBookById from '../../pages/GetBookById/GetBookById';
//import Header from '../header/Header';
//import { FaBeer } from "@react-icons/all-files/fa/";
const bookService = new BookService();
function Displaybook(props) {
  const navigate = useNavigate();
  const [bookdata, setBookdata] = useState("");
  const [view, SetView] = useState(false);

  // useEffect(() => {
  //   getBookById();
  // }, [])

  const getBookById = (props) => {
    console.log(props.bookArray.name)
    console.log(props.bookArray.author)
    let data = {
      "id": props.bookArray.id

    }

    console.log("GetBookById is calling");
    console.log(data);
    bookService.getBookById(data).then((response) => {
      console.log(response);
      setBookdata(response.data.book);
       SetView(true);
        // navigate('/getBookByid')

    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      {view == false ?
      <div className="bookAlign">
      <div className="bookContainer" style={{ animation: TouchRipple }} onClick={() => getBookById(props)}>
        <div>
          <div className="books">
            <div className="booksImage">
              <img src={bookImage} alt="" className="book-image" />
            </div>
          </div>
          <div className="BookContent">
            <div className="bookName">{props.bookArray.name}</div>
            <div className="bookAuthor">{props.bookArray.author}</div>
            <div>
              <span className="rating">
                {" "}
                4.5
                <AiFillStar></AiFillStar>

              </span>
              <div className="bookPrice">Rs.{props.bookArray.price}</div>
              <span style={{ marginLeft: -170 }}>({props.bookArray.quantity})</span>
              </div>
          </div>
        </div>
      </div>
    </div>
    :<GetBookById bookdata={bookdata} />
  
      }

    </>
    );
}

export default Displaybook;