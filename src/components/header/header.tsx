import React from 'react';
import classes from './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        <FontAwesomeIcon icon={faVideo} className={classes.icon} />
        MovieSearcher
      </Link>
      <nav>
        <ul className={classes.links}>
          <li className={classes.link}>
            <Link to="/">Favorite</Link>
          </li>
          <li className={classes.link}>
            <Link to="/">Best</Link>
          </li>
          <li className={classes.link}>
            <Link to="/">New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
