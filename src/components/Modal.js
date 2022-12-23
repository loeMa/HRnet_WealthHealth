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
            <NavLink to={"/"} aria-label='close the modal' ><span className='modal__content__close' onClick={closeModal} >&times;</span></NavLink>
                <p>Employee Created!</p>
            <Button goto="/employee-list" text="ok" classname='modal__content--btn' label={'go to list of employee'} />
            
            </div>
            
        </div>
    );
};

export default Modal;