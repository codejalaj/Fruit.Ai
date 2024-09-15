import React from 'react'
import './About.css';
import { PiFigmaLogoFill } from "react-icons/pi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



const About = () => {
  const navigate=useNavigate();
  
  const navBack = (e) =>{
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className='app_about '>  
      <div className="about_header">
      <h1 className='back'>
        <IoArrowBackCircleSharp onClick={navBack} />
      </h1>
      </div>
    <div className="fruit-ai-container">
      <div className="content">
        <h1>Fruit.AI</h1>
        <p>
        At Fruit.AI, we believe that incorporating a vibrant mix of fruits into your diet is a delicious and powerful way to nourish your body and mind. We're passionate about making fruits accessible and enjoyable for everyone,
         because the natural nutrients they offer are essential building blocks for a healthy and fulfilling life.
        </p>
        <button className="about-button">About</button>
      </div>
    </div>
    </div>
  )
}

export default About