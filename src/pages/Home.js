import React from 'react';
import Button from '../components/Button';
import CreateEmployee from '../components/CreateEmployee';
import Header from '../components/Header';


const Home = () => {
    return (
        <div>
            <Header />
            <Button goto='/employee-list' text='View Current Employees ' classname={'list--btn'} />
            <CreateEmployee />
        </div>
    );
};

export default Home;