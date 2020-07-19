import React from 'react';
import Category from '../components/Category';

function ViewCategories(props) {
  return (
    <div>
      <Category
        name='DESAYUNO'
        styleInfo={{ background: '#401B13', color: 'white' }}
        changeView={() => props.changeView('viewBreakfast')}
      />
      <Category
        name='ALMUERZO'
        styleInfo={{ background: '#D9B1A3', color: 'black' }}
        changeView={() => props.changeView('viewLunch')}
      />
      <Category
        name='CENA'
        styleInfo={{ background: '#A66F5B', color: 'black' }}
        changeView={() => props.changeView('viewDinner')}
      />
    </div>
  );
}

export default ViewCategories;
