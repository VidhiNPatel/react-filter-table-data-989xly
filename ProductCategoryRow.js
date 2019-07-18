import React from 'react';
import ReactDOM from 'react-dom';

class ProductCategoryRow extends React.Component {
  render(){
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;