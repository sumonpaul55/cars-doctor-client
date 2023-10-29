import React from 'react';
import Banner from './banner/Banner';
import About from './about/About';
import Services from './services/Services';
import Address from './address/Address';
import Team from './team/Team';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Address></Address>
            <Team></Team>
        </section>
    );
};

export default Home;