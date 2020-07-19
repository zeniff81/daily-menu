import React from 'react';
import '../css/category.css';

function Category(props) {
  return (
    <div
      className='category'
      style={props.styleInfo}
      onClick={props.changeView}
    >
      {props.name}
    </div>
  );
}

export default Category;
