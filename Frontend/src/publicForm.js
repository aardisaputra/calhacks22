import React from 'react';
import { useState } from 'react';
import Card from './Card';
import data from "./data";
import { useNavigate } from "react-router-dom";
import './cards.css';
import './styles.css';

function PublicForm() {

  const navigate = useNavigate();

  const [filtData, setFiltData] = useState("");
  

  let averagePrice = 0
  for (let i = 0; i < data.length; i++){
    averagePrice+= data[i].price
  }
  averagePrice = averagePrice / data.length
  let data1 = []
  let counter = 0
  for(let i = 0; i < data.length; i++) {
    data1.push(data[counter])
    counter+=1
    
  }

  const [priceAVG, setPriceAVG] = useState('$'+averagePrice);


    const navToHome = () => {
      navigate("/");
  }

  const filtered = data.filter((item) => {
    if(filtData === "") {
      return item
    } else if (item.service.toLowerCase().includes(filtData.toLowerCase())) {
      return item
    }
  }).map(item => {
    return(
      <Card 
      key = {item.id}
      {...item}
      />
    )
  })



  function abstration(data) {
    var total = 0;
    for(let i = 0; i < data.length; i++) {
      total = total + data[i].props.price
    }
    if(isNaN(total/data.length)) {
      setPriceAVG(NaN)
    } else {
      setPriceAVG('$'+total/data.length);
    }
  }



  return <>
  <button onClick={navToHome}>Return Home</button>
  <form className='nav'>
    <label className='center'>Service Search</label>
    <input className='nav-search' name="SearchBar" onChange={(event) => 
    {
      setFiltData(event.target.value); abstration(filtered);
    }}></input>
  </form>
  <h1 className='avg'>Average Cost of Service(s): {priceAVG}</h1>
  <div className='public-page'>
      <section className='cards-list'>
      {filtered}
      </section>
    </div>
  </>
    
}

export default PublicForm;
