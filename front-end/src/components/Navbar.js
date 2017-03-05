import React from 'react';

const Navbar = (props) => (
	<div className="navbar navbar--green navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mobile-navbar" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Chat Bot</a>
        </div>
        <div className="collapse navbar-collapse" id="mobile-navbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">{props.name}</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </div>
      </div>
    </div>
);

export default Navbar;