import {React, useState} from 'react'
import './Contact.css'
import {TextField, Button} from '@mui/material';

function Contact(){

  const[name, setName] = useState("");
  const[feedback, setFeedback] = useState("");
  const[error, setError] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(name === ""){
      setError("Enter valid name");
    }else{
      setFeedback(<p><span style={{ color: 'rgb(255, 0, 76)'}}>{name}</span>, Thank you for the response</p>);
    }
    
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
                          helperText={error}
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                          />
                        <TextField 
                          fullWidth
                          id="outlined-basic" 
                          label="Email" 
                          variant="outlined" 
                          helperText="" 
                          />
                        <TextField
                            fullWidth
                            id="outlined-multiline-basic"
                            label="Message"
                            multiline
                            rows={4}
                        />
                       <Button type="submit" variant="outlined" style={{color: 'rgb(0,0,0)', border:'1px solid rgb(0,0,0)', fontWeight:'700'}}>Submit</Button>
                    </form>
                    <p id="feedback">{feedback}</p>
            </div>
            <div className='animation'>

            </div>
        </div>
           
        
    </div>
  )
}

export default Contact