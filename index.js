import React, { Component } from 'react';
import { render } from 'react-dom';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import './style.css';

const  PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class FilterableProductTable extends Component {
  constructor(props) {
      super(props);
      this.state = {
        filterText : '',
        inStockOnly : false
      };
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInstockChange = this.handleInstockChange.bind(this);
    }

  handleFilterTextChange(filterText){
    this.setState({
      filterText : filterText,
    })
  }

  handleInstockChange(inStockOnly) {
    this.setState({
      inStockOnly : inStockOnly
    })
  }
  render() {
    return (
      <div>
        <SearchBar  filterText = {this.state.filterText}
                    filterTextChange = {this.handleFilterTextChange}
                    inStockOnly = {this.state.inStockOnly}
                    inStockChange = {this.handleInstockChange}>
        </SearchBar>
        <ProductTable products= {this.props.products}
                      filterText = {this.state.filterText}
                      inStockOnly = {this.state.inStockOnly}></ProductTable>
      </div>
    );
  }
}

render(<FilterableProductTable products = { PRODUCTS }/>, document.getElementById('root'));
