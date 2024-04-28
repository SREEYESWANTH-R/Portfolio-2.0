import React from 'react';
import './project.css'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import Inter from "../../src/assests/inter.png"
import Inter2 from "../../src/assests/inter2.png"


function Projects(){
    const handleSourceCodeDownload = () => {
        fetch('/download')
          .then(response => {
            if (response.ok) {
              return response.blob();
            }
            throw new Error('Network response was not ok.');
          })
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'source_code.zip');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
          })
          .catch(error => {
            console.error('Error downloading source code:', error);
          });
      };

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
                <Button size="small" style={{color:'rgb(255, 0, 76)'}} onClick={handleSourceCodeDownload}>Source Code</Button>
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
                <Button size="small" style={{color:'rgb(255, 0, 76)'}} onClick={handleSourceCodeDownload}>Source Code</Button>
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
                <Button size="small" style={{color:'rgb(255, 0, 76)'}} onClick={handleSourceCodeDownload}>Source Code</Button>
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
                <Button size="small" style={{color:'rgb(255, 0, 76)'}} onClick={handleSourceCodeDownload}>Source Code</Button>
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
                <Button size="small" style={{color:'rgb(255, 0, 76)'}} onClick={handleSourceCodeDownload}>Source Code</Button>
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
                <Button size="small" style={{color:'rgb(255, 0, 76)'}} onClick={handleSourceCodeDownload}>Source Code</Button>
                </CardActions>
            </Card>
        </div>
    </div>   
  )
}

export default Projects