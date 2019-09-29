import React, { Component } from 'react';
import axios from 'axios';

import DefaultLayout from 'components/layout/DefaultLayout';
import Services from 'components/complex/Services';
import PriceTag from 'components/shared/PriceTag';

import 'App.css';

export default class App extends Component {
  state = {
    data: null,
    loading: false,
  };

  get dataReceived() {
    return !this.state.loading && this.state.data;
  }

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest() {
    this.setState({ loading: true });

    axios('/api/data.json')
      .then(({ data }) => this.setState({ data }))
      .finally(() => this.setState({ loading: false }))
  }

  renderPriceTags = (data) => {
    return (
      <>
        <PriceTag name="Balance" price={data['balance']} currency="uah" />
        <PriceTag name="To payoff" price={data['next_payout']} currency="uah" />
      </>
    );
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <DefaultLayout
          topbar={this.dataReceived && this.renderPriceTags(data['header'])}
          page={this.dataReceived && <Services services={data['bonuses']} />}
        />
      </div>
    );
  }
}