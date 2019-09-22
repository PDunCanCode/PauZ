<<<<<<< HEAD
import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div 
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
        className={`${size} menu-item`
}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

=======
import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div 
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
        className={`${size} menu-item`
}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

>>>>>>> 7cdd961f611b93cb23cde88d8a50d8ca77759754
export default MenuItem;