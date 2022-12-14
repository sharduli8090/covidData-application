import React,{useState} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
// import Hamburger from 'hamburger-react';
import { SlMenu } from "react-icons/sl";

export default function Header() {
    const[showNav,setShowNav]=useState(false);
    const setNav = () =>{
      if(showNav){
        setShowNav(!showNav);
      }
    }
    return (
        <> 
        <div className="main-nav">
            <img className= "logo" src={
                            require("../../assets/logo.png")
                        }/>
       <div className='head-container'>
          <div className={
              showNav ? "mobile-menu" : "menu"
            }>
                  <Link to='/' onClick={()=> setNav()}><div className='nav-btn mobile-btn'>Home</div></Link>
                  <Link to='country' onClick={()=> setNav()}><div className='nav-btn mobile-btn'>Country</div></Link>
                  <Link to="state" onClick={()=> setNav()}><div className='nav-btn mobile-btn'>State</div></Link>
                  <Link to="table" onClick={()=> setNav()}><div className='nav-btn mobile-btn'>Table</div></Link>
                  
          </div>

          <div className='btn-container-head'>
              <div className= "hamburger-menu">
                <div onClick={()=>setShowNav(!showNav)} className="hamburger-inner">
                  <SlMenu size={25}/>
                </div>
              </div>
            </div>
            </div>
            </div>
            {/* <nav className="header"> */}
                {/* <div className="header-logo"> */}
                    {/* <img src={
                            require("../../assets/logo.png")
                        } */}
                        {/* className='header-logo'/> */}
                {/* </div> */}
                {/* <div className="header-btns"> */}
                    {/* <Link to='/' className="btn-header">
                        <button className="btn-header-btn selected">Home</button>
                    </Link>
                    <Link to='country' className="btn-header">
                        <button className="btn-header-btn selected">Country</button>
                    </Link>
                    <Link to='state' className="btn-header">
                        <button className="btn-header-btn selected">State</button>
                    </Link>
                    <Link to='tables' className="btn-header">
                        <button className="btn-header-btn selected">Table</button>
                    </Link> */}
                {/* </div>
            </nav> */}
        </>
    );
}
