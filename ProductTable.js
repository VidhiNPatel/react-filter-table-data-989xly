import React from 'react';
import ReactDOM from 'react-dom';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';


class ProductTable extends React.Component {
  render(){
    console.log(this.props.products)
    const rows = [];
    let lastCategory = null;
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    
    this.props.products.forEach((product) => {

      if(product.name.indexOf(filterText) === -1) {
        return;
      } 
      if(inStockOnly && !product.stocked){
        return;
      }

      if(product.category !== lastCategory){
        rows.push(
          <ProductCategoryRow category = {product.category} key = {product.category}></ProductCategoryRow>
        )
      }
      
      rows.push(<ProductRow product = {product} key = {product.name}></ProductRow>);

      lastCategory = product.category;
    })
    return (
      <table>
        <thead>
         <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;