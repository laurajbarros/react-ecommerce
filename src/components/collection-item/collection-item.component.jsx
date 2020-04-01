import React from 'react';
import './collection-item.styles.scss';
import {withRouter} from 'react-router-dom';
import CustomButton from '../button/button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CollectionItem = ({history, match, title, item, addItemToCart}) => {
  return (
    <div
      className='collection-item'
      onClick={() => history.push(`${match.url}/${title}/${item.id}`)}
      >
      <div
        className='image'
        style= {{
          backgroundImage: `url(${item.imageUrl})`
        }}
        />
      <CustomButton onClick={() => addItemToCart(item)} inverted>Add to Cart</CustomButton>
      <div className='collection-footer'>
        <div className='name'>{item.name}</div>
        <div className='price'>{item.price}usd</div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item))
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
