import React from 'react';
import './styles.css';
import ComNav from './ComNav';
import ComHeader from './ComHeader';
import ComSectionOne from './ComSectionOne';
//import ComSectionTwo from './ComSectionTwo';

const ComAppGit = () => (
        <div>
            <ComNav/>
            <ComHeader/>
            <ComSectionOne/>
            {/* <ComSectionTwo/> */}
        </div>
);

export default ComAppGit;