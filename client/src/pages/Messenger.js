import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout'

class MessengerPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <h1 style={{ textAlign: 'center' }}>Welcome! Check which friend sent you a message.</h1>
        </Layout>
      </React.Fragment>
    )
  }
}

export default MessengerPage;