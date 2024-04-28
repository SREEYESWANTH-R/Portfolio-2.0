import {React, useState, useEffect} from 'react'
import './Contact.css'
import {TextField, Button} from '@mui/material';
import axios from "axios";

function Contact(){

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[feedback, setFeedback] = useState("");
  // const[error, setError] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3000/contact',{
        name,email,feedback
    }).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.error("enter valid details:", error)
    }); 
    setEmail("");
    setName("");
    setFeedback("");
  }

  return (
    <div className='main-container'>
        <h1>Contact Us</h1>
        <div className='contact-container'>
            <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <TextField 
                          fullWidth
                          id="outlined-basic" 
                          label="Name" 
                          variant="outlined" 
                          helperText=""
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                          />
                        <TextField 
                          required
                          fullWidth
                          id="outlined-basic" 
                          label="Email" 
                          variant="outlined" 
                          value = {email}
                          helperText="" 
                          onChange={(e)=>setEmail(e.target.value)}
                          />
                        <TextField
                            fullWidth
                            id="outlined-multiline-basic"
                            label="Message"
                            multiline
                            rows={4}
                            value = {feedback}
                            onChange={(e)=>setFeedback(e.target.value)}
                        />
                       <Button type="submit" variant="outlined" style={{color: 'rgb(0,0,0)', border:'1px solid rgb(0,0,0)', fontWeight:'700'}}>Submit</Button>
                    </form>
                    {/* <p id="feedback">{feedback}</p> */}
            </div>
            <div className='animation'>

            </div>
        </div>
           
        
    </div>
  )
}

export default Contact