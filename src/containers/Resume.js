import React, { Component } from 'react';
import Header from '../components/header/Header.js';
import Sidebar from '../components/sidebar/Sidebar.js';
import Body from '../components/body/Body.js';

export default class Resume extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Body />
      </>
    );
  }
}
