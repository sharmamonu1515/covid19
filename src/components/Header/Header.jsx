import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Header.module.css';

const Header = () => (
  <nav className={styles.nav}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/charts">Charts</Link></li>
      <li><Link to="/map">Map</Link></li>
    </ul>
  </nav>
)

export default Header;