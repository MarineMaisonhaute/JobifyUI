import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import HomeArtisan from "./HomeArtisan";
import { Button, Link } from "@mui/material";
import Annonce1Mois from "./Annonce1Mois";
import { DateTimePicker } from "@mui/lab";
import { Today } from "@mui/icons-material";

export function NomJobArtisan(Id) {
  const [posto, setPosto] = useState(null);

  useEffect(() => {
    axios.get(`https://localhost:7004/job/id/${Id}`)
      .then((res) => {
        setPosto(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return posto ? posto.name : "Aucun job particulier";
}

function Annonce1MoisAPI(props) {
  const [post, setPost] = useState([]);
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  useEffect(() => {
    axios.get(`https://localhost:7004/post/date?date=${formattedDate}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="post-button-wrapper">
          <Link href="/home">
            <Button className="post-button" variant="contained">Revenir à toutes les annonces</Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="cards-wrapper">
          {post.map((item, index) => {
            return <Annonce1Mois key={index} post={item} />
          })}
        </div>
      </div>
    </div>
  );
}


export default Annonce1MoisAPI;
