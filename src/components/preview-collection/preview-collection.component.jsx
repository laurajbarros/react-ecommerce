import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import {withRouter} from 'react-router-dom';

const PreviewCollection = ({title, items, routeName, history, match}) => {
  return (
    <div className='preview-collection'>
      <h1
        className='title'
        onClick={() => history.push(`${match.url}/${routeName}`)}
        >{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem
              key={item.id} item={item} title={title}/>
          ))
        }
      </div>
    </div>
  )
}

export default withRouter(PreviewCollection);
