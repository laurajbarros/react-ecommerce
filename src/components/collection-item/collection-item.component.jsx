import React from 'react';
import './collection-item.styles.scss';
import {withRouter} from 'react-router-dom';

const CollectionItem = ({history, match, title, item}) => {
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
      <div className='collection-footer'>
        <div className='name'>{item.name}</div>
        <div className='price'>{item.price}usd</div>

      </div>
    </div>
  )
}

export default withRouter(CollectionItem);
