import React from 'react';

const CartItem = (label, price, monetarySystem) => {
  return (
    <span>
      {label}: {price}
      {monetarySystem}
    </span>
  );
};

export default CartItem;
