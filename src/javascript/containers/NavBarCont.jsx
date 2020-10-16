// ---Dependencys
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
// ---Media
import logoImg from 'Images/logo.png';

// ------------------------------------------ COMPONENT-----------------------------------------
const NavBarCont = withRouter(props => {
  const current = props.location.pathname;
  return (
    <React.Fragment>
      <Row className="nav-div">
        {/* --------------Logo--------------- */}
        <Col xs={24} sm={24} lg={8}>
          <Link to="/">
            <div className="to-home">
              <img src={logoImg} alt="Github" width="100%" />
            </div>
          </Link>
        </Col>
        {/* --------------Butons--------------- */}
        <Col xs={24} sm={24} lg={16}>
          <Row>
            <Col xs={24} sm={24} lg={5}>
              <Link to="/search">
                <div
                  className={
                    current === '/search' ? 'nav-btn nav-border' : 'nav-btn'
                  }
                >
                  Search
                </div>
              </Link>
            </Col>
            <Col xs={24} sm={24} lg={5}>
              <Link to="/bookmarks">
                <div
                  className={
                    current === '/bookmarks' ? 'nav-btn nav-border' : 'nav-btn'
                  }
                >
                  Bookmarks
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
});

export default NavBarCont;
