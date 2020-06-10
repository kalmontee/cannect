import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout'

class NotificationsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <h1 style={{ textAlign: 'center' }}>Check your latest notifications from friends!</h1>
        </Layout>
      </React.Fragment>
    )
  }
}

export default NotificationsPage;