import React, { useState } from 'react';
import MenuModal from './MenuModal'; // Import the modal component
import '../css/Header2.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header style={headerStyles}>
            {/* <img src="path/to/logo.png" alt="Gapsy Logo" style={logoStyles} /> */}
            <svg width="113" height="35" viewBox="0 0 113 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_logo__p4els">
                <path d="M43.5555 10.0641C43.5578 5.37516 40.3029 1.30665 35.7092 0.256497C31.1155 -0.79366 26.4017 1.45316 24.3461 
                        5.67274C22.2905 9.89232 23.4385 14.9651 27.1133 17.9014C30.7882 20.8377 36.015 20.8583 39.7133 17.9512C40.2591 19.3218 
                        41.5908 20.2222 43.0727 20.2222H43.5555V10.0948V10.0641ZM33.4494 16.0485C30.1271 16.0485 27.4338 13.3692 27.4338 10.0641C27.4338 
                        6.75908 30.1271 4.07979 33.4494 4.07979C36.7717 4.07979 39.4649 6.75908 39.4649 10.0641C39.4624 13.3674 36.7699 16.0439 33.4494 
                        16.0439V16.0485Z" fill="currentColor"></path><path d="M18.7032 3.80447C20.0823 3.23564 20.9769 1.93016 20.9776 
                        0.48535V0H10.4127C5.52204 0.039398 1.30737 3.32537 0.249538 7.92371C-0.808291 12.522 1.57092 17.2147 5.9867 19.2395C10.4025 
                        21.2643 15.6852 20.0848 18.7252 16.3954C21.7653 12.706 21.7575 7.48389 18.7064 3.80293L18.7032 3.80447ZM10.502 16.1164C7.05518 
                        16.1164 4.26099 13.4256 4.26099 10.1063C4.26099 6.78709 7.05518 4.09629 10.502 4.09629C13.9488 4.09629 16.743 6.78709 16.743 
                        10.1063C16.743 11.7003 16.0855 13.229 14.915 14.3561C13.7446 15.4832 12.1572 16.1164 10.502 16.1164Z" fill="currentColor"></path>
                <path d="M12.0993 23.3333H3.11109V24.1145C3.10907 24.9605 3.44678 25.7726 4.04972 26.3716C4.65266 26.9706 5.47129 27.3072 
                        6.32499 27.3072H12.0993C12.7816 27.2878 13.4205 27.6375 13.7674 28.2201C14.1143 28.8027 14.1143 29.5261 13.7674 30.1087C13.4205 
                        30.6913 12.7816 31.041 12.0993 31.0216H11.0096C9.94552 31.0216 8.9251 31.441 8.17324 32.1872C7.42139 32.9335 6.99982 33.9454 7.00144 
                        35H12.0993C15.3118 34.9487 17.8889 32.3531 17.8889 29.169C17.8889 25.9848 15.3118 23.3892 12.0993 23.3379V23.3333Z"
                    fill="currentColor"></path>
                <path d="M101.339 0L95.5068 14.021L88.8864 0.399833L88.702 0H84L93.2322 19.3153L93.1187 19.5887L88.7493 30.0049C90.9939 30.9183 
                        93.2511 29.8611 94.1811 27.6438L95.5714 24.3377L97.6962 19.2694L105.778 0H101.339Z" fill="currentColor"></path>
                <path d="M110.833 3.88889C111.907 3.88889 112.778 3.01833 112.778 1.94444C112.778 0.870557 111.907 0 110.833 0C109.759 0 108.889 
                        0.870557 108.889 1.94444C108.889 3.01833 109.759 3.88889 110.833 3.88889Z" fill="currentColor"></path>
                <path d="M75.4445 8.08858C74.6907 8.10888 73.9851 7.72804 73.6021 7.09415C73.219 6.46026 73.219 5.67338 73.6021 5.03949C73.9851 
                        4.4056 74.6907 4.02476 75.4445 4.04506H77.4081C81.3843 4.04506 81.6667 0 81.6667 0H75.4445C72.0497 0.0527711 69.326 2.75346 
                        69.326 6.06682C69.326 9.38018 72.0497 12.0809 75.4445 12.1336C76.1982 12.1133 76.9038 12.4942 77.2868 13.1281C77.6699 13.762 
                        77.6699 14.5488 77.2868 15.1827C76.9038 15.8166 76.1982 16.1975 75.4445 16.1772H73.4808C69.5046 16.1772 69.2222 20.2222 69.2222 
                        20.2222H75.4381C78.8329 20.1695 81.5566 17.4688 81.5566 14.1554C81.5566 10.842 78.8329 8.14135 75.4381 8.08858H75.4445Z"
                    fill="currentColor"></path>
                <path d="M56.389 1.17454e-07C53.6043 -0.00040939 50.9336 1.07002 48.9644 2.97576C46.9952 4.8815 45.8889 7.46642 45.8889 
                        10.1617C45.8889 10.171 45.8889 10.1818 45.8889 10.1926V29.5556H46.425C48.479 29.5556 50.1442 27.9438 50.1442 25.9557V18.3298C53.8092 
                        20.9553 58.8062 20.9908 62.5107 18.4176C66.2152 15.8444 67.7802 11.251 66.3837 7.0496C64.9873 2.84824 60.9487 -0.000298172 56.389 
                        1.17454e-07ZM56.389 16.2047C52.9409 16.2047 50.1457 13.4992 50.1457 10.1617C50.1457 6.82429 52.9409 4.11875 56.389 4.11875C59.837 
                        4.11875 62.6322 6.82429 62.6322 10.1617C62.6322 11.7645 61.9745 13.3015 60.8036 14.4348C59.6328 15.5681 58.0448 16.2047 56.389 
                        16.2047Z" fill="currentColor"></path>
            </svg>
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
