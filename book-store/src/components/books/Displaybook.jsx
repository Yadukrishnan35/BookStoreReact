import React, { useEffect, useState } from 'react';
import './Displaybook.css';
import { AiFillStar } from 'react-icons/ai';
import BookService from '../../services/BookService';
import { useNavigate } from 'react-router-dom';
import bookImage from '../../Images/bookImage.png';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import GetBookById from '../../pages/GetBookById/GetBookById';


function Displaybook(props) {
  
  const navigate = useNavigate();
  
  const bookDetail = (data) => {
    props.listenToEachBook(data);
  }
  
  return (
    
    <div className="bookAlign">
      <div className="bookContainer" style={{ animation: TouchRipple }} onClick={() => bookDetail(props.bookArray)}>
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
  );
}

export default Displaybook;