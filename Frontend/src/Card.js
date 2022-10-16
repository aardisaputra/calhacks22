import React from 'react';
import data from './data';
import './cards.css'

function Card(props) {
  let averagePrice = 0
  for (let i = 0; i < data.length; i++){
    averagePrice+= data[i].price
  }
  averagePrice = averagePrice / data.length
  let priceDifference = Math.round(props.price - averagePrice)
  let text = "OVERVALUED"
  if (props.price > props.avg) {
    text = "overvalued"
  }

  return (
    <div className='card'>
      { 
        text &&
        <div className="card--badge">{text}</div>
      }
      <img src={props.image} className='card-image'/>
      <div className='card-stats'>
      <p className='card--name'>{props.name}</p>
      <p>{props.service}</p>
      <p>{props.price}</p>
      <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
