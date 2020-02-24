import React from 'react';
import './navbar.scss';
import Logo from "../../logo.svg";
export const Navbar =  () =>{
    return(
        <nav className={"navbar"}>
            <img src={Logo} alt="City tour company"/>
            <ul className={"nav-links"}>
                <li><a className={"nav-link"} href="/">Home</a></li>
                <li><a className={"nav-link"} href="/">About</a></li>
                <li><a className={"nav-link active"} href="/">Tours</a></li>
            </ul>
        </nav>
    )
};

