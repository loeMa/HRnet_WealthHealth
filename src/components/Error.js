import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} message - error's message 
 * @returns {HTMLElement}
 */
const Error = ({message}) => {
    return (
        <span className='error'>
            {message}
        </span>
    );
};

Error.propTypes = {
    message: PropTypes.string,
}

export default Error;