import React, { Component } from 'react';
import Header from '../components/header/Header.js';
import Sidebar from '../components/sidebar/Sidebar.js';
import Body from '../components/body/Body.js';
import styles from './Resume.css';

export default class Resume extends Component {
  render() {
    return (
      <div className={styles.resume}>
        <Header />
        <Sidebar />
        <Body />
      </div>
    );
  }
}
