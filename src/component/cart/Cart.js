import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const euro = '€';
  const items = [
    { id: '1', label: 'Monstera', price: 8, monetarySystem: euro },
    { id: '2', label: 'Lierre', price: 10, monetarySystem: euro },
    { id: '3', label: 'Bouquet de fleurs', price: 15, monetarySystem: euro }
  ];
  const totalReducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <React.Fragment>
      <h1>Panier</h1>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{CartItem(item.label, item.price, item.monetarySystem)}</li>;
        })}
      </ul>
      <p>Total: {items.map((item) => item.price).reduce(totalReducer)}</p>
    </React.Fragment>
  );
};

export default Cart;
