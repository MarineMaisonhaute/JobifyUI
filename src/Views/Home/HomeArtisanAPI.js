import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import HomeArtisan from "./HomeArtisan";
import { Button, Link } from "@mui/material";

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

function HomeArtisanAPI(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7004/post", {
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
          <Link href="/annonce1m">
            <Button className="post-button" variant="contained">Annonce expirant dans + 1 mois</Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="cards-wrapper">
          {post.map((item, index) => {
            return <HomeArtisan key={index} post={item} />
          })}
        </div>
      </div>
    </div>
  );
}


export default HomeArtisanAPI;
