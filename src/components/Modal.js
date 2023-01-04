import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import PropTypes from 'prop-types';

/**
 * 
 * @param {Function} IsShowing - to set if the modal is show
 * @param {Function} isSubmit - to reset the form submission
 * @returns {HTMLElement}
 */
const Modal = ({IsShowing, isSubmit}) => {

    const closeModal = () =>{
        IsShowing(false);
        isSubmit(false)
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

Modal.propTypes = {
    IsShowing: PropTypes.func, 
    isSubmit: PropTypes.func
}

export default Modal;