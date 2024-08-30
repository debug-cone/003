import React, { useState } from 'react'
import TitleComponent from './TitleComponent';
import logo from '../assets/logo.svg'

function CardComponent() {

    const [price, setPrice] = useState(100);
    const [counter, setCounter] = useState(1);
    const [activeDarkMode, setDarkMode] = useState(false);
    // let counter = 1;

    function changePrice () {
        setPrice(500);
    }
    function plusCounter () {
        setCounter(counter+1)
    }
    function minusCounter () {
        if(counter > 1){
            setCounter(counter-1)
        }
    }
    function changeMode () {
        // if(activeDarkMode){
        //     setDarkMode(false)
        // }else{
        //     setDarkMode(true)
        // }
        setDarkMode(!activeDarkMode)
    }

    return (
        <div className='card' style={{backgroundColor: activeDarkMode ? 'darkblue' : 'cadetblue'}}>
        

            <TitleComponent>
                <h2>React Card</h2>    
            </TitleComponent>

            <img src={logo} 
            alt="Logo" 
            className='card_img'
            style={{width: '100px'}}
            />

            <span className='card_price'>${price}</span>

            <div className='card_counterItems'>
                <button className='card_btn' onClick={plusCounter}>+</button>
                <span className='card_counter'>{counter}</span>
                <button className='card_btn' onClick={minusCounter}>-</button>
            </div>

            <button onClick={changePrice}>Change Price</button>

            <button onClick={changeMode}>
                {activeDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}

export default CardComponent