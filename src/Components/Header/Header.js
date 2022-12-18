import React, {useState} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {SlMenu} from "react-icons/sl";

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    const setNav = () => {
        if (showNav) {
            setShowNav(!showNav);
        }
    }
    return (
        <>
            <div className="main-nav">
                <img className="logo"
                    src={
                        require("../../assets/logo.png")
                    }/>
                <div className='head-container'>
                    <div className={
                        showNav ? "mobile-menu" : "menu"
                    }>
                        <Link to='/'
                            onClick={
                                () => setNav()
                        }>
                            <div className='nav-btn mobile-btn'>Home</div>
                        </Link>
                        <Link to='country'
                            onClick={
                                () => setNav()
                        }>
                            <div className='nav-btn mobile-btn'>Country</div>
                        </Link>
                        <Link to="state"
                            onClick={
                                () => setNav()
                        }>
                            <div className='nav-btn mobile-btn'>Region</div>
                        </Link>
                        <Link to="table"
                            onClick={
                                () => setNav()
                        }>
                            <div className='nav-btn mobile-btn'>Table</div>
                        </Link>

                    </div>

                    <div className='btn-container-head'>
                        <div className="hamburger-menu">
                            <div onClick={
                                    () => setShowNav(!showNav)
                                }
                                className="hamburger-inner">
                                <SlMenu size={25}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
