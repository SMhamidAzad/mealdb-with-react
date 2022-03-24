import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DisplayMeal from '../DisplayMeal/DisplayMeal';
import './Meal.css'

const Meal = () => {
    const [meals,setMeals]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    const handleAddToCart = (meal)=>{
        // console.log(cart);
        const newCart = [...cart,meal]
        setCart(newCart)
    }
    return (
        <div className='food-container'>
            <div className='foodDiv'>
                  {
                     meals.map(meal => <DisplayMeal 
                               key={meal.idMeal}
                               meal={meal}
                               handleAddToCart={handleAddToCart}
                    ></DisplayMeal>)
                  }
            </div>
            <div className='cart-container'>
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default Meal;