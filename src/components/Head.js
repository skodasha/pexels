import React from 'react';

import '../style/Head.css';

function Head ({ title }) {
    return (
        <div className='head'>
            <h1>{title} images</h1>
        </div>
    )
}

export default Head