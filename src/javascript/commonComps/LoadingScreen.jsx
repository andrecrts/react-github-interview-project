// ---Dependencys
import React from 'react';
import { SettingFilled } from '@ant-design/icons';

// ------------------------------------------ COMPONENT-----------------------------------------
const LoadingScreen = () => {
  return (
    <div className="loading-message">
      <h1>Loading ...</h1>
      <SettingFilled spin />
    </div>
  );
};

export default LoadingScreen;
