import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import HomeUser from "./HomeUser";

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
    const [afficherFormulaire, setAfficherFormulaire] = useState(false);
  
    const handleAfficherFormulaire = () => {
      setAfficherFormulaire(true);
    };
  
    const handleSoumettreFormulaire = (event) => {
      // Votre code pour traiter la soumission du formulaire
      event.preventDefault();
    };
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
        <div>
            <button onClick={handleAfficherFormulaire} className="Ajout">Ajouter un post</button>
            {afficherFormulaire && (
            <form onSubmit={handleSoumettreFormulaire}>
            {/* Contenu du formulaire ici */}
            </form>
            )}
        </div>
        {post.map((item, index) => (
        <HomeUser key={index} post={item}/>
        ))}
    </div>
  );
}

export default HomeUserAPI;