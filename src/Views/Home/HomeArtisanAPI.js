import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import HomeArtisan from "./HomeArtisan";

function HomeArtisanAPI(props) {

  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7004/post", {
    }).then((res) => {
      console.log(res.data)
      setPost(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div>
      {post.map((item, index) => (
        <HomeArtisan key={index} post={item} />
      ))}
      </div>
  );
}

export default HomeArtisanAPI;