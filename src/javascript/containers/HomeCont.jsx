// ---Dependencys
import React, { useEffect } from 'react';
// ---Redux
import { useDispatch } from 'react-redux';
import { cleanSearchList } from 'Actions/search';

// ------------------------------------------ COMPONENT-----------------------------------------
function HomeCont() {
  const dispatchR = useDispatch();
  const cleanSearch = () => dispatchR(cleanSearchList());
  useEffect(() => {
    cleanSearch();
  }, []);
  return (
    <React.Fragment>
      <p>
        Github demo for <span>YALO</span> from:
      </p>
      <p>
        <span>STEVEN BARQUET</span>
      </p>
      <div className="home-body" />
    </React.Fragment>
  );
}

export default HomeCont;
