import './Recipe.css';
import image1 from '../../media/recipe.png';
function RecipeComponent() {
    return (
        <div className="recipe-main">
            <img src={image1} alt='recipe' />
            <div className='recipe-content'>
                <h1>Subscribe to recipes every week</h1>
                <p>Elevate your culinary journey with a weekly recipe subscription, delivering the cherished flavors of your favorite restaurants to your home. Delight in restaurant-quality meals, conveniently crafted just for you.</p>
                <button className='learn-more'>Learn More</button>
            </div>
        </div>
    )
}
export default RecipeComponent;