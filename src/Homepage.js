import React,{useState} from "react";
import Cards1 from "./Cards1";
import Cards2 from "./Cards2";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";


const Homepage = () => {

    const [slide, setSlide] = useState(1);

    const changeSlide = () => {
        if(slide === 1){
            setSlide(2);
        }
        else{
            setSlide(1);
        }
    
    }

   function  getvalue () {
        if (slide === 1) {    
        return <Cards1/>;
      }

      else{  
        return <Cards2/>;
      }
    }

    const value = getvalue();

     return(
        <>
            <div className = "home" >
                <div className = "top" >
                    <button className = "live_btn" ><span className = "dot" ></span> <span className ="live" >LIVE</span></button>
                        <h2 className = "top_heading" > Upcoming Live Coaching </h2>
                        <div className = "arrows" >
                        <button className = "left" onClick = {changeSlide} > <IoIosArrowBack/> </button>
                        <button className = "right" onClick = {changeSlide}  > <IoIosArrowForward/> </button>
                    </div>
                </div>
                
                <div className = "cards" >
                        {value}
                </div>       
            </div>
        </>
    );
}

export default Homepage;