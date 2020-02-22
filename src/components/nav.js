import React from 'react';
import PropTypes from 'prop-types';
import NavSearch from './nav-search';

const propTypes = {
  nav: PropTypes.shape({}),
  onSongsSearch: PropTypes.func.isRequired
};

const Nav = ({ nav, onSongsSearch }) => {
  const { search } = nav;
  const { currentQuery } = search;

  return (
    <nav className="nav">
      <div className="nav__inner container">
        <div className="nav__section">
          <a className="nav__logo__text" href="/">
            The SoundCloud
          </a>
        </div>
        <div className="nav__section">
          <NavSearch currentQuery={currentQuery} onSearch={onSongsSearch} />
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = propTypes;

export default Nav;
