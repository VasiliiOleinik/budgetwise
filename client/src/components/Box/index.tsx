import React from 'react';

const Box = ({children, className = ""}) => {
    return (
        <div className={`shadow-default-shadow py-5 px-6 bg-white flex items-center rounded border border-blue-100 ${className}`}>
            {children}
        </div>
    );
};

export default Box;