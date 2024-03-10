import React from 'react'
import './Contact.css'
import {TextField, Button} from '@mui/material';

function Contact(){
  return (
    <div className='main-container'>
        <h1>Contact Us</h1>
        <div className='contact-container'>
            <div className='form-container'>
                    <form>
                        <TextField 
                          fullWidth
                          id="outlined-basic" 
                          label="Name" 
                          variant="outlined" 
                          helperText="" 
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
                       <Button variant="outlined" style={{color: 'rgb(0,0,0)', border:'1px solid rgb(0,0,0)', fontWeight:'700'}}>Primary</Button>
                    </form>
            </div>
            <div className='animation'>

            </div>
        </div>
           
        
    </div>
  )
}

export default Contact