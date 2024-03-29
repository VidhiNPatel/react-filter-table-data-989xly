import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.filterTextChange(e.target.value);
  }

  handleInStockChange(e){
    this.props.inStockChange(e.target.checked);
  }


  render(){
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} 
                onChange = {this.handleFilterTextChange}/>
        <p><input type="checkbox" checked={this.props.inStockOnly}
                  onChange = {this.handleInStockChange}/> Only show products in stock</p>
      </form>
    );
  }
}

export default SearchBar;