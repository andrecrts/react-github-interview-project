// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from 'Cont/HomeCont';

// ------------------------------------------ COMPONENT-----------------------------------------
const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <HomeCont />
    </React.Fragment>
  );
};

export default HomePage;
