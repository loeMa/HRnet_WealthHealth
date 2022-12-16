import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import CreateEmployee from '../components/CreateEmployee';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Button link='/employee-list' text='View Current Employees ' classname={'list--btn'} />
            <CreateEmployee />
        </div>
    );
};

export default Home;