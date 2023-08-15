import React from 'react';
import './RecipePage.css';

const recipe = {
    title: 'Chicken Biryani',
    image: 'https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800',
    ingredients: [
        '2 cups basmati rice',
        '500g chicken, cut into pieces',
        '2 large onions, thinly sliced',
        '4 tomatoes, chopped',
        '1/2 cup plain yogurt',
        '2 tsp ginger paste',
        '2 tsp garlic paste',
        '1 tsp biryani masala',
        '1/2 tsp turmeric powder',
    ],
    steps: [
        'Wash and soak the rice for 30 minutes.',
        'In a large pot, heat oil and fry the sliced onions until golden brown. Remove half for garnishing.',
        'Add ginger and garlic paste to the pot and sauté for a minute.',
        'Add chicken pieces and cook until they turn white.',
    ],
};

function RecipePage() {
    return (
        <div className="recipe-container">
            <h1 className="recipe-title">{recipe.title}</h1>
            <div className='recipe-first'>
                <div className="recipe-image">
                    <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="recipe-details">
                    <div className="recipe-ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="recipe-steps">
                <h2>Cooking Steps:</h2>
                <ol>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default RecipePage;
