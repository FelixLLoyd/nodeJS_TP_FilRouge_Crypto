import React from 'react';
import Crypto from '../components/Crypto';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Crypto />
        </div>
    );
};

export default Home;