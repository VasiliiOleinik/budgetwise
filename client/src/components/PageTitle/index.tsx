import React from 'react';

const PageTitle = ({children}) => {
    return (
        <h1 className='font-bold text-2xl mb-4'>{children}</h1>
    );
};

export default PageTitle;