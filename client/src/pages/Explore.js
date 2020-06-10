import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout'


class ExplorePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <h1 style={{ textAlign: 'center' }}>Explore page! Check the latest content</h1>
        </Layout>
      </React.Fragment>
    )
  }
}

export default ExplorePage;