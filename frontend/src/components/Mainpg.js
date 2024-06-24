import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import RecipeModal from './RecipeModal';
import p from '../assets/p.jpg';
import './Mainpg.css';

function Mainpg() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = () => {
    const appId = '3319cb77';
    const appKey = '7834efbd73c250b9288fb0fbb354a6d0';
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`)
      .then(response => {
        setResults(response.data.hits);
        setSelectedRecipe(null);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <div className='header'>
      <div className='logo'>
        <img className='imge' src={p} alt='logo'/>
        <p className='lgtxt'>Feast</p>
      </div>
      <h1>Recipe Search</h1>
      <NavLink to ='/'> <h2 className='logbtn'>Logout</h2></NavLink> 
      </div>
      <input className='srchbar'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search for a recipe..."
      />
      <button className='srchbtn' onClick={handleSearch}>Search</button>
      {results.length === 0 ? (
        <div id="placeholder">Search your favorite food</div>)
       : (
        <div id="results" className="grid">
          {results.map((result, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <img src={result.recipe.image} alt={result.recipe.label} />
                <h2>{result.recipe.label}</h2>
              
              <button className='viewbtn' onClick={() => handleRecipeClick(result.recipe)}>View Recipe</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
      )}
    </div>
  );
}

export default Mainpg;
