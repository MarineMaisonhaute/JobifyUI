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
import { Dialog, DialogActions, DialogContent, DialogTitle, Rating, Stack, TextField } from '@mui/material';


function HomeUser(props) {
  useEffect(() => {
  })
  const dateString = props.post.finishDate;
  const date = moment(dateString);
  const formattedDate = date.format('YYYY-MM-DD');
  const [comment, setComment] = useState('');

  const handleRating = (e, userId, postId) => {
    e.preventDefault();
    axios.post('https://localhost:7004/rating', {
        ratedUserId: userId,
        postId: postId,
        note: e.target.value
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      });
  }

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
        {props.post.responses.map((item, index) => (
          <div className="response-item">
            <div className="comment">
              {item.comment}
            </div>
            <div className="username">
              {item.user.firstName} {item.user.lastName}
            </div>
            <div className="phone-number">
              {item.user.phoneNumber}
            </div>
            <div>
              <Stack spacing={1}>
                <Rating onChange={(e) => handleRating(e, item.userId, item.postId)} name="size-medium" defaultValue={item.user.averageRating} precision={0.5}/>
              </Stack>
            </div>
          </div>

        ))}
      </CardContent>
    </Card>
  );
}

export default HomeUser;