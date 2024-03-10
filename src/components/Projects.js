import React from 'react';
import './project.css'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import Inter from "../../src/assests/inter.png"
import Inter2 from "../../src/assests/inter2.png"


function Projects(){
  return (
    <div className='main-cardBody'>
        <h1>Projects</h1>
        <div className='cards'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140}}
                image={Inter}
                title="Portfolio"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Portfolio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                JavaScript portfolio showcasing projects, skills, and achievements creatively with interactive design and smooth functionality for impressive presentation.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Open</Button>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Source Code</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={Inter2}
                title="Extension"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Extension
                </Typography>
                <Typography variant="body2" color="text.secondary">
                JavaScript portfolio showcasing projects, skills, and achievements creatively with interactive design and smooth functionality for impressive presentation.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Open</Button>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Source Code</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={Inter}
                title="Resume Generator"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Resume Generator
                </Typography>
                <Typography variant="body2" color="text.secondary">
                JavaScript portfolio showcasing projects, skills, and achievements creatively with interactive design and smooth functionality for impressive presentation.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Open</Button>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Source Code</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={Inter2}
                title="DocGPT"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    DocGPT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                JavaScript portfolio showcasing projects, skills, and achievements creatively with interactive design and smooth functionality for impressive presentation.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Open</Button>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Source Code</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={Inter}
                title="Placement Portal"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Placement Portal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                JavaScript portfolio showcasing projects, skills, and achievements creatively with interactive design and smooth functionality for impressive presentation.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Open</Button>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Source Code</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={Inter2}
                title="RoboFriends"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    RoboFriends
                </Typography>
                <Typography variant="body2" color="text.secondary">
                JavaScript portfolio showcasing projects, skills, and achievements creatively with interactive design and smooth functionality for impressive presentation.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Open</Button>
                <Button size="small" style={{color:'rgb(255, 0, 76)'}}>Source Code</Button>
                </CardActions>
            </Card>
        </div>
    </div>   
  )
}

export default Projects