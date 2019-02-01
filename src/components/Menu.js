import React from 'react';
import {Link} from 'react-router-dom';
// import App from './App/App.js'

const Menu = () => {
    return ( 
        <div>
            <button className = "app__button" > <Link to = {"/"} > Index du chat </Link></button >
            <button className = "app__button" > <Link to = {"/about"} > About </Link></button >
        </div>
    )
};


export default Menu