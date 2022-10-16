import React from 'react';
import { useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate();

    const navToInternal = () => {
        navigate("/internal");
    }
    
    const navToPublic = () => {
        navigate("/public");
    }

    return (
        <div>
            <h1>Welcome Aequalis's Prototype Demonstration.</h1>
            <button onClick={navToInternal}>Internal Invoicing Page for Hospitals</button>
            <button onClick={navToPublic}>Visualization Page Accessible to Public</button>
        </div>
    );
};

export default Home;