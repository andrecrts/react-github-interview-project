import React from 'react';
import { Redirect } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <Redirect to='/search' />
        </>
    );
};
