
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import './App.css';
import AppRouter from './pages/Router';
import * as THREE from 'three'

function App() {
  const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
  return (
    // <ThemeProvider theme={theme}>
    //   <GlobalStyles />
    //   <AppRouter/>
    // </ThemeProvider>

    <>
        
    </>
  );
}

export default App;
