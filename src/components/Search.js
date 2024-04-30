import React, { useState } from 'react';
import axios from 'axios';

function Search() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const searchRecipes = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_RECIPE_SEARCH_BACKEND_URL}/api/recipes?q=${query}`);
            setRecipes(response.data.results);
        } catch (error) {
            console.error('Error fetching recipes', error);
        }
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={searchRecipes}>Search</button>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;