import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout'


class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <h1 style={{ textAlign: 'center' }}>Welcome! This is your profile page</h1>
        </Layout>
      </React.Fragment>
    )
  }
}

export default Profile;