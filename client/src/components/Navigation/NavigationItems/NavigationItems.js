import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import LogoutBtn from '../../../components/UI/LogoutBtn/LogoutBtn';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/explore"><i className={"fas fa-hashtag"}></i>Explore</NavigationItem>
    <NavigationItem link="/notifications"><i className={"fas fa-bell"}></i>Notifications</NavigationItem>
    <NavigationItem link="/messages"><i className={"fas fa-comment"}></i>Messages</NavigationItem>
    <NavigationItem link="/profile"><i className={"fas fa-user-alt"}></i>Profile</NavigationItem>
    <LogoutBtn />
  </ul>
);

export default navigationItems;