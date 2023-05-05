import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import HomeArtisan from "./HomeArtisan";

function Test(Id){
  const [posto, setPosto] = useState([]);
  useEffect(() => {
    axios.get(`https://localhost:7004/job/id/${Id}`, {
    }).then((res) => {
      console.log(res.data)
      setPosto(res.data.name);
    }).catch((err) => {
      console.log(err);
    })
  }, []
)
return posto;
}

function HomeArtisanAPI(props) {
  const [jobname, setjobname] = useState([]);
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    axios.get("https://localhost:7004/post")
      .then((res) => {
        jobname = Test(res.data.jobId);
        console.log(res.data);
        setjobname(jobname);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {post.map((item, index) => (
        <HomeArtisan key={index} post={item} />
      ))}
    </div>
  );
}

export default HomeArtisanAPI;