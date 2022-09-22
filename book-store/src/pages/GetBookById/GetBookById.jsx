import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import bookImage from '../../Images/bookImage.png';
import BookService from '../../services/BookService';
import './GetBookById.css';

  //const bookService = new BookService();
function GetBookById(props) {
    console.log(props);
//     const navigate = useNavigate();
//   const [bookdata,setBookdata] = useState([]);
//     const getBookById = (props) => {
//         console.log(props.bookArray.name)
//         let data = {
//           "id":props.bookArray.id
          
//         }
    
//         console.log("GetBookById is calling");
//                    console.log(data);
//         bookService.getBookById(data).then((response) => {
//           console.log(response);
//           navigate('/getBookByid')
//           setBookdata(response.data.data);  
            
//           console.log(response);
//             }).catch((error) =>{
//               console.log(error);
//             })
//       }
    
    //   useEffect(() => {
    //     getBookById()
    //   }, [])
    return (
        <>
         <Header></Header>
         <div className='maincontainer' style={{marginTop:140,marginLeft:110}}>
        <div className='bookContent'>
            
             <div className="leftAlignBooks">
             <div className="leftSection-BookDetailTop">
                
             <div className="bookDetail-BookImage">
             <img src={bookImage} alt="" className='BookImg' />
             </div>
        </div>
        <div className='leftSection-BookDetailBottom'>

<input type="button" value="ADD TO BAG" className='addToBag' />
<input type="button" value="WISHLIST" className='wishlist' />
</div>
</div>

<div className="rightSection-BookDetail">
                    <div className='rightSection-BookDetail-child1'>
                        <div className="rightbookname">{props.bookdata?props.bookdata.name:''}</div>
                        <div className="rightbookautor">{props.bookdata?props.bookdata.author:''}</div>

                        <div className="rightbookrating">
                            <div >4.5 </div>
                            <AiOutlineStar className='child1-starIcon' />
                        </div>
                        <div className="righrSection-price">Rs.{props.bookdata?props.bookdata.price:''}</div>
                    </div>

                    <div className="rightSection-BookDetail-child2">
                        <div className="bookDetail">
                            Book Detail
                        </div>
                    <div className="bookDesc">
                        UX For Dummies is a hands-on guide to developing and implementing user experience strategy. Written by globally-recognized UX consultants, this essential resource provides expert insight and guidance on using the tools and techniques that create a great user experience, along with practical advice on implementing a UX strategy that aligns with your organisation's business goals and philosophy. 

                            {/* It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.
                            Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components. */}
                        </div>

                    </div>

                    <div className="rightSection-BookDetail-child3">
                        <div className="customerFeedback">
                            Customer Feedback
                        </div>
                        <div className="feedback-bookDetail">
                            <div className="bookDetail-overallRatings">
                                Overall rating
                            </div>
                            <div className="star-icons">
                                <AiOutlineStar  />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </div>
                            <div className="feedbackInput">
                                <input type="text" className='books-feedbackInput' />
                            </div>
                            <div className="submitFeedback">
                                <Button variant="contained" className='submitFeedback-btn'>submit</Button>
                            </div>
                        </div>
                        <div className="bookDetail-displayFeedback">
                            <div className="displayReview-box1">
                                <div className="username">
                                    <span className='round'>AC</span> Aniket Chile
                                </div>
                                <div className="staricon-display">
                                    <AiOutlineStar  />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                                <div className="userfeedbackuser">
                                    Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                                </div>
                            </div>
                            <div className="displayReview-box2">
                                <div className="username">
                                    <span className='round'>SB</span> Shweta Bodkar
                                </div>
                                <div className="staricon-display">
                                    <AiOutlineStar  />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                                <div className="userfeedbackuser">
                                    Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                                </div>
                            </div>
                        </div>
                
                </div>
            </div>   
    </div>
</div>   
</>
    );
}

export default GetBookById;