import React, { Component } from 'react';
import { searchProduct, fetchProducts } from '../../_action/searchActions';
import  { connect } from 'react-redux';

export class SearchForm extends Component {

    onChange = e => {
        this.props.searchProduct(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchProducts(this.props.text);
        //this.props.setLoading();
    }
    
    render() { 
        return ( <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
        <h4>Building Product Selection Platform</h4>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Products ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div> 
        );
    }
}

const mapStateToProps = state => ({
    text: state.products.text
})
 
export default connect(mapStateToProps, {searchProduct, fetchProducts})(SearchForm);