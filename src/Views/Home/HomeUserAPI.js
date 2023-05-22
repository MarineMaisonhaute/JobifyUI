import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import HomeUser from "./HomeUser";
import { Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";

export function NomJobUser(Id) {
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


function HomeUserAPI(props) {

  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7004/post/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }
    }).then((res) => {
      console.log(res.data)
      setPost(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (

    <div>
      <div>
        <div className="post-button-wrapper">
          <Link to="/createpost">
            <Button className="post-button" variant="contained">Ajouter un post</Button>
          </Link>
        </div>
      </div>
      <div className="cards-wrapper">
        {post.map((item, index) => (
          <HomeUser key={index} post={item} />
        ))}
      </div>
    </div>
  );
}

export default HomeUserAPI;