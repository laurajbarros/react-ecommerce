import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../button/button.component';
import CollectionItem from '../collection-item/collection-item.component';
import { connect } from 'react-redux';

const CartDropdown = ({cartItems}) => {
  return (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map((item) => (
          <CollectionItem
            key={item.id} item={item} title={item.name}/>
        ))
      }
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
)}

const mapStateToProps = ({cart}) => {
  return ({
    cartItems: cart.cartItems
  })
};

export default connect(mapStateToProps)(CartDropdown);
