import React from "react";
import { Link } from "react-router-dom";  
import '../assets/styles/Home.css';

export default function Home(){
    return(
        <>
<div className="frame">
<div className="div-1"></div>
        <div className="div-2"></div>
        <div className="div-3"></div>
        <div className="div-4"></div>
</div>
        <div className="home">
        
            <div className="home-text">
                Check the Latest Covid Data from just one tap!
            </div>
        {/* <div> */}
            
        <Link to="country" className="btn-get-started-link"><button className="btn-get-started">Get Started</button></Link> 
        {/* </div> */}
        </div>
        </>
    );
}