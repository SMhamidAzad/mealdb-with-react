import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={'https://www.themealdb.com/images/logo-small.png'} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/order">Order</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;