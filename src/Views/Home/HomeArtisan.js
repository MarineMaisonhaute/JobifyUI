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
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function HomeArtisan(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [postId, setPostId] = useState(null);

  const dateString = props.post.finishDate;
  const date = moment(dateString);
  const formattedDate = date.format('YYYY-MM-DD');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(comment);
    console.log(postId);
    try {
      const response = await axios.post('https://localhost:7004/response', {
        postId: postId,
        comment: comment,
      }, {
        headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }});

      console.log(response.data);
      setIsFormOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenForm = (postId) => {
    setIsFormOpen(true);
    setPostId(postId);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <Card className="post-card" sx={{ width: '50%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.helloartisan.com/webbackoffice/article/9/artisan-travaux.jpg"
        title="Artisan"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.post.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.post.description}
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
      <div>
        <CardActions>
          <Button className="button-help" onClick={() => handleOpenForm(props.post.postId)}>
            Proposer son aide
          </Button>
        </CardActions>
        <Dialog open={isFormOpen} onClose={handleCloseForm}>
          <DialogTitle>Je propose mon aide</DialogTitle>
          <DialogContent>
            <TextField
              className='form-comm-wrapper'
              label="Commentaire"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm}>Annuler</Button>
            <Button onClick={handleSubmit} type="submit" form="help-form">Envoyer</Button>
          </DialogActions>
        </Dialog>
      </div>
  
    </Card>
  );
}

export default HomeArtisan;