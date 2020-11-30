import React from 'react';
import '../App.css';

function Cards(props) {
  return (
    <div className='box'>
      <img src={props.img} alt=''></img>
      <h2>{props.title}</h2>
      <p>{props.name}</p>
      <span>pins: {props.pins}</span>
    </div>
  );
}

export default Cards;
