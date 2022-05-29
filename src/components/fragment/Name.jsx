import React from 'react';
import '../assets/scss/Name.scss';

function Name({className,length,name}) {
    
    return (
        <p className={className}>
                { name }
        </p>
    );
}

export default Name;