import React from 'react';
import data from "./data"
import { useNavigate } from "react-router-dom";
import './cards.css'


function Choice() {

  const navigate = useNavigate();

    const navToHome = () => {
      navigate("/");
  }

  const navToPublic = () => {
    navigate("/public");
}

const newData = data

  function condition(event) {
    for(let i = 0; data.length; i++){
        newData[i].push({
            "cond": event
        })
    }
  }

  return <>
  <button onClick={navToHome}className='nav-choice'>Return Home</button>
  <h1 className='or'>OR</h1>
  <form className='nav-search' onSubmit={condition}>
    <label className='center'>Search Bar</label>
    <input background type="text" name="service"></input>
    <input type="Submit" onClick={navToPublic}></input>
</form>

  </>
    
}


export default Choice;
