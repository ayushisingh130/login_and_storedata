import React from 'react';
import Data from "./Data";
import {RiYoutubeLine} from "react-icons/ri";
import {FaRegFilePdf} from "react-icons/fa";
import {FaRegBookmark} from "react-icons/fa";
import {BiTime} from "react-icons/bi";

const Cards = () => {

    return (
        <>
             {Data.slice(0,3).map((card) => {

            const {id,days,title,classes,questions,notes,imagesrc} = card;
            
               return(

                    <div key = {id} className = "card"  >
                        <div className = "image1">
                            <img  className ="card_img" src= {imagesrc} alt = "card_image" />
                        </div>
                        
                        <div className="card_days">
                            <BiTime color = "white" style = {{margin: "10px 0px 0px 20px"}}/> 
                            <h3 className = "days_heading"  > {days} </h3>    
                        </div>
                        
                        <h2 className = "card_title" > {title} </h2>
                        <div className = "card_bottom_details" >
                            <div className = "classes" >
                                <RiYoutubeLine color = "rgb(231, 85, 85)" style = {{margin: "7px 8px 0px 0px"}}  />
                                <p className= "card_classes" >{classes} </p>
                            </div>
                            <div className = "card_footer" >
                                <FaRegBookmark color="orange" style = {{margin: "6px 8px 0px 0px"}} /><p className = "questions" >  {questions} </p>
                                <FaRegFilePdf  color = "rgb(231, 85, 85)" style = {{margin: "5px 0px 0px 40px"}}  /> <p className = "notes" > {notes} </p>
                            </div>
                        </div>
                    </div>
               );  
             }
            )}
        </>
    );
   
}

export default Cards;
