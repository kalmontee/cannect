import React, { Component } from 'react';

import classes from './Layout.module.css';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <section className={classes.Layout}>
      <ToolBar />
      <main>
        {props.children}
      </main>
    </section>
  )
}

export default Layout;