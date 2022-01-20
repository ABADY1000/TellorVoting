import React from 'react';
import '../styles/Nav.css';
import { ReactComponent as TellorWhite } from '../assets/TellorWhite.svg';

function LogoMaker(){
    return(
        <TellorWhite className="NavBar__Title" />
    );
}

export default LogoMaker;