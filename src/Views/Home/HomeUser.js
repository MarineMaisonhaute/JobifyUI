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
import moment from 'moment';
import { FaPlus } from 'react-icons/fa'
import { NomJobUser } from './HomeUserAPI';

function HomeUser(props) 
  {
    useEffect(()=>{
    })
    const dateString = props.post.finishDate;
    const date = moment(dateString);
    const formattedDate = date.format('YYYY-MM-DD');
  return(
    <Card className="card-container">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.post.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description : {props.post.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Job recherché : {NomJobUser(props.post.jobId)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Prix : {props.post.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Date Limite : {formattedDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Département : {props.post.department}
        </Typography>
      </CardContent>
    </Card>
  );
}
  
  export default HomeUser;