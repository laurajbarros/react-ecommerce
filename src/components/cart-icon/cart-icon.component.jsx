import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleShowCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleShowCart, cartItemsCount}) => {
  return(
    <div className='cart-icon' onClick={toggleShowCart} >
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  )
};

const mapStateToProps = (state) => ({
  cartItemsCount : selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
