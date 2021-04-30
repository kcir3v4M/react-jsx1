import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './component/header/Header';
import Cart from './component/cart/Cart';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Cart />
      </React.Fragment>
    );
  }
}

export default hot(App);
