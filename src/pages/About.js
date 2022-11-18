import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1> About </h1>
            <br /><br /><br />
            <p>
                <h2>
                    What is a crypto-currency ?
                </h2>
                <br />
                A crypto-currency is a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority.
            </p>
            <br />
            <p>
                <h2>
                    What is a Blockchain ?
                </h2>
                <br />
                Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).
            </p>
        </div>
    );
};

export default About;