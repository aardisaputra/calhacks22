import React from 'react';
import { useNavigate } from "react-router-dom";
import "./styles.css"


function Home() {

    const navigate = useNavigate();

    const navToInternal = () => {
        navigate("/internal");
    }
    
    const navToPublic = () => {
        navigate("/public");
    }

    const navToChoice = () => {
        navigate("/choice");
    }

    return (
        <div>
            <h1>Welcome Aequalis's Prototype Demonstration.</h1>
            <div className="home">
                <button className='first' onClick={navToInternal}>Internal Invoicing Page for Hospitals</button>
                <button className='second' onClick={navToPublic}>Visualization Page Accessible to All Public Services</button>
            </div>

        </div>
    );
};

export default Home;