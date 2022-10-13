import React from 'react';
import { NavLink } from 'react-router-dom';
import CreateEmployee from '../components/CreateEmployee';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <NavLink to={"/employee-list"} className='redirect__btn' >View Current Employees </NavLink>
            <CreateEmployee />
        </div>
    );
};

export default Home;