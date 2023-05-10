import React, { useState } from 'react';

function FormulaireReponse() {
  const [commentaire, setCommentaire] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const demandeDeReponse = { postId: 0, comment: commentaire };
    fetch('https://localhost:7004/response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(demandeDeReponse)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de la demande de réponse');
      }
      alert('Demande de réponse envoyée avec succès');
    })
    .catch(error => {
      console.error(error);
    });
  }

  function handleCommentaireChange(event) {
    setCommentaire(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="commentaire">Commentaire :</label><br />
      <textarea id="commentaire" name="commentaire" value={commentaire} onChange={handleCommentaireChange}></textarea><br />
      <button type="submit">Proposer son aide</button>
    </form>
  );
}

export default FormulaireReponse;