import React from 'react';
import './DisplayMeal.css'

const DisplayMeal = ({meal,handleAddToCart}) => {
    // console.log(props.meal);
    const {strMeal,strInstructions,strMealThumb,strCategory}=meal
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <div className='food-info'>
                <h3 className='food-name'>{strMeal}</h3>
                <p>{strInstructions.slice(0,120)+"......"}</p>
                <p><i>Catagory: {strCategory}</i></p>
            </div>
            <button onClick={()=>handleAddToCart(meal)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default DisplayMeal;