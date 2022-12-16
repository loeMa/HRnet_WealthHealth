import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Modal = () => {


    const closeModal = () =>{
        const spanClose = document.querySelector('.modal')
        spanClose.style.display = 'none'
    }

    return (
        <div className='modal'>
            <div className='modal__content'>
            <NavLink to={"/"} ><span className='modal__content__close' onClick={closeModal} >&times;</span></NavLink>
                <p>Employee Created!</p>
            <Button link="/employee-list" text="ok" classname='modal__content--btn' />
            
            </div>
            
        </div>
    );
};

export default Modal;