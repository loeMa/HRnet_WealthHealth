import React from 'react';
import { NavLink } from 'react-router-dom';

const Modal = () => {


    return (
        <div className='modal'>
            <div className='modal__content'>
            <NavLink to={"/employee-list"} ><span className='modal__content__close' >&times;</span></NavLink>
                <p>Employee Created!</p>
            </div>
            
        </div>
    );
};

export default Modal;