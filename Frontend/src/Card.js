import React from 'react';
import data from './data';
import './cards.css'

function Card(props) {
  let averagePrice = 0
  for (let i = 0; i < data.length; i++){
    averagePrice+= data[i].price
  }
  averagePrice = averagePrice / data.length
  let priceDifference = Math.abs(Math.round(props.price - averagePrice))
  let text = ''
  if (props.price > averagePrice) {
    text = "OVERVALUED"
  }
  const name2 = 'xd' + text

  // const randInt = Math.random(4);

  // randInt = 0

  // let image = ""

  // if (randInt === 0) {
  //   image = "download.jpeg"
  // } else {
  //   image = "download "+'('+randInt+')'+'.jpeg'
  // }

  return (
    <span className='card'>
      { 
        text &&
        <div className="card--badge">{text}</div>
      }
        <img src={props.image} className='card-image'/>
        <div className='card-text'>
          <p className='name'>{props.name}</p>
          <p className='name2'>Service: {props.service}</p>
          <span className='grey'>Price: </span>
          <span className='name2'>${props.price}</span>
          <span className='grey'>● Price Difference:</span>
          <span className={name2}> ${priceDifference}</span>
        </div>
    </span>
  );
}

export default Card;
