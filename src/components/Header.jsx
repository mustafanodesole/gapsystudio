import React, { useState } from 'react';
import MenuModal from './MenuModal'; // Import the modal component
import '../css/Header2.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header style={headerStyles}>
            <img src="images/logo.svg" alt="Gapsy Logo" style={logoStyles} />
           
            <div style={buttonContainer}>
                <button style={menuButton} onClick={() => setIsMenuOpen(true)}></button>
                <button href="./contacts" style={hireButton} >Hire Us</button>
            </div>
            {isMenuOpen && <MenuModal onClose={() => setIsMenuOpen(false)} />}
        </header>
    );
};

const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    background: 'transparent',
};

const logoStyles = {
};

const buttonContainer = {
    display: 'flex',
    alignItems: 'center',
};

const hireButton = {
    padding: '10px 20px',
    background: 'black',
    borderRadius: '8px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
};

const menuButton = {
    marginRight: '6px',
    minHeight: '35px',
    padding: '10px 20px',
    backgroundColor: 'black', // Keeps background color for fallback
    backgroundImage: 'url("/menu.png")',
    backgroundSize: '70%',
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
};

export default Header;