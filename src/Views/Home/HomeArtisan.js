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
import moment from 'moment';
import { NomJobArtisan } from './HomeArtisanAPI';
import { TextField } from '@mui/material';

function HomeArtisan(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [comment, setComment] = useState('');

  const dateString = props.post.finishDate;
  const date = moment(dateString);
  const formattedDate = date.format('YYYY-MM-DD');

  const handleSubmit = async (event) => {console.log(comment);
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:7004/response', {
        postId: props.post.id,
        comment: comment,
      });
      console.log(response.data);
      setIsFormOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

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
          Job recherché : {NomJobArtisan(props.post.jobId)}
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
      <CardActions>
        <Button className="button" onClick={() => setIsFormOpen(true)}>
          Proposer son aide
        </Button>
        {isFormOpen && (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Commentaire"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              required
            />              
            <Button type="submit">Envoyer</Button>
            <Button onClick={() => setIsFormOpen(false)}>Annuler</Button>
          </form>
        )}
      </CardActions>
    </Card>
  );
}

export default HomeArtisan;