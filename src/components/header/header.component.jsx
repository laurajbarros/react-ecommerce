import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, showCart}) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>Logo</Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
          currentUser ?
            (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
            :
            (<Link className='option' to='/signin'>SIGN IN</Link>)
        }
        <CartIcon/>
      </div>
      {
        showCart ?
        <CartDropdown/>
        : ''
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  showCart: state.cart.showCart
});

export default connect(mapStateToProps)(Header);
