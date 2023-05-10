import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import HomeArtisan from "./HomeArtisan";

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
    axios.get("https://localhost:7004/post")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {post.map((item, index) => {
        return <HomeArtisan key={index} post={item}/>
      })}
    </div>
  );
}


export default HomeArtisanAPI;