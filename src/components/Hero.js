import React from 'react'
import './Hero.css'
import HeroImg from '../assests/hero-img.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



function Hero(){
  return (
   <div className='hero-container'>
    <div className='hero-info'>
        <h1>Hi I'm Sree Yeswanth R,</h1>
        <h2>a Full Stack Developer & UI/UX Designer</h2>
        <p>Welcome to my portfolio, where innovation meets design. I specialize in creating seamless digital experiences by blending technical prowess with creative flair. Let's collaborate and bring your ideas to life.</p>
        <div className='hero-icon'>
            <a href=''><LinkedInIcon fontSize="large"/></a>
            <a href=''><GitHubIcon fontSize="large"/></a>
            <a href=''><FacebookIcon fontSize="large"/></a>
            <a href=''><InstagramIcon fontSize="large"/></a>
        </div>
        <div className='hero-btn'>
            
        </div>
    </div>
    <div className='hero-img'>
        <div className='image-circle'>
            <img src={HeroImg} alt='profile'></img>
        </div>
    </div>
   </div>
   )
}

export default Hero