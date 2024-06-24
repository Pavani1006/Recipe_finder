import React from 'react';
import './RecipeModal.css';

function RecipeModal({ recipe, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{recipe.label}</h2>
        <img src={recipe.image} alt={recipe.label} />
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredientLines ? recipe.ingredientLines.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          )) : <li>No ingredients available</li>}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {recipe.url ? <li><a href={recipe.url} target="_blank" rel="noopener noreferrer">View full recipe</a></li> : <li>No instructions available</li>}
        </ol>
      </div>
    </div>
  );
}

export default RecipeModal;

