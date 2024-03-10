import React from 'react'
import './Hero.css'
import {Button} from '@mui/material'
import HeroImg from '../assests/hero-img-modified.jpeg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



function Hero(){
  return (
   <div className='hero-container'>
    <div className='hero-info'>
        <h1>Hi I'm <span>Sree Yeswanth R</span>,</h1>
        <h2>a Full Stack Developer & UI/UX Designer</h2>
        <p>Welcome to my portfolio, where innovation meets design. I specialize in creating seamless digital experiences by blending technical prowess with creative flair. Let's collaborate and bring your ideas to life.</p>
        <div className='hero-icon'>
            <a href='https://www.linkedin.com/in/sree-yeswanth-r/'><LinkedInIcon fontSize="large" style={{ color: 'rgb(255, 0, 76)' }}/></a>
            <a href='https://github.com/SREEYESWANTH-R'><GitHubIcon fontSize="large" style={{ color: 'rgb(255, 0, 76)' }}/></a>
            <a href=''><FacebookIcon fontSize="large" style={{ color: 'rgb(255, 0, 76)' }}/></a>
            <a href=''><InstagramIcon fontSize="large" style={{ color: 'rgb(255, 0, 76)' }} /></a>
        </div>
        <div className='hero-btn'>
            <Button variant="outlined" style={{color:"rgb(255, 0, 76)", fontWeight:"600", border:"1px solid rgb(255, 0, 76)"}}>Download CV</Button>
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