import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './Home.css';

function HomeArtisan(props) 
  {
    useEffect(()=>{
    })

  return (
    <Card className="card-container">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.post.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description : {props.post.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.post.jobId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Prix : {props.post.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Date Limite : {props.post.finishDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Département : {props.post.department}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="button">Répondre</Button>
      </CardActions>
    </Card>
  );
}
  
  export default HomeArtisan;