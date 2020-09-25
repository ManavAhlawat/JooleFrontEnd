import React, { Component } from 'react';
import SearchForm from './SearchForm';
//import {connect} from 'react-redux';
import ProductsContainer from './ProductsContainer';
//import Spinner from '../Layout/Spinner';

export class Landing extends Component {
    state = {  }
    render() { 
        //const {loading} = this.props;
        return (<div className="container">
                    <SearchForm/>
                    {<ProductsContainer />}
                </div>  );
    }
}

// const mapStateToProps = state => ({
//     loading: state.movies.loading
// })
 
export default Landing;