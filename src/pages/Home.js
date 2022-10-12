import React from 'react';
import CreateEmployee from '../components/CreateEmployee';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <CreateEmployee />
        </div>
    );
};

export default Home;