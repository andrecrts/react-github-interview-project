// ---Dependencys
import React, { useEffect } from 'react';
// ---Redux
import { useDispatch } from 'react-redux';
import { cleanSearchList } from 'Actions/search';
// ---Components
import Titulo from 'Comp/Error404/Titulo';
import Cuerpo from 'Comp/Error404/Cuerpo';

// ------------------------------------------ COMPONENT-----------------------------------------
function Error404Cont() {
  const dispatchR = useDispatch();
  const cleanSearch = () => dispatchR(cleanSearchList());
  useEffect(() => {
    cleanSearch();
  }, []);
  return (
    <React.Fragment>
      <Titulo />
      <Cuerpo />
    </React.Fragment>
  );
}

export default Error404Cont;
