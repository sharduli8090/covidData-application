import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        {/* I am Header! <br/> */}
        <nav className="header">
            <div className="header-logo">
                <img src={require("../../assets/logo.png")} className='header-logo'/>
            </div>
        <div className="header-btns">
        <Link to='/'  className="btn-header"><button className="btn-header-btn selected">Home</button></Link>
        <Link to='country' className="btn-header"><button className="btn-header-btn selected">Country</button></Link>
        <Link to='state' className="btn-header"><button  className="btn-header-btn selected">State</button></Link>
        <Link to='tables' className="btn-header"><button className="btn-header-btn selected">Table</button></Link>
        </div>
        </nav>
        </>
    );
}