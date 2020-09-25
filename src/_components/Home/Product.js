import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProduct } from '../../_action/searchActions';

//import Spinner from '../Layout/Spinner';

export class Product extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchProduct(this.props.match.params.id);
    //this.props.setLoading();
  }
  render() {
   // this.props.fetchProduct(this.props.match.params.id);
    const { product } = this.props;
    console.log(product)
    //console.log("this.props = "+this.props)
    //console.log("product ="+product);

    let productInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={product.image} className="thumbnail" alt="Image" />
          </div>
          <div className="col-md-8">
            PRODUCT SUMMARY
            <hr></hr>
            <strong>Description:</strong>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Manufacturer:</strong> {product.manufacturer}
              </li>
              <li className="list-group-item">
                <strong>Series:</strong> {product.series}
              </li>
              <li className="list-group-item">
                <strong>Model:</strong> {product.model}
              </li>
              <hr></hr>
              <strong>Type:</strong>
              <li className="list-group-item">
                <strong>Use Type:</strong> {product.useType}
              </li>
              <li className="list-group-item">
                <strong>Application:</strong> {product.application}
              </li>
              <li className="list-group-item">
                <strong>Mounting Location:</strong> {product.mountLocation}
              </li>
              <li className="list-group-item">
                <strong>Model Year:</strong> {product.modelYear}
              </li>
              <hr></hr>
              <strong>Technical Specifications:</strong>
              <li className="list-group-item">
                <strong>Airflow (CFM):</strong> {product.Airflow}
              </li>
              <li className="list-group-item">
                <strong>Power (W):</strong> {product.maxPower}
              </li>
              <li className="list-group-item">
                <strong>Sound at max speed (dBA):</strong> {product.sound}
              </li>
              <li className="list-group-item">
                <strong>Fan sweep diameter (in):</strong> {product.diameter}
              </li>
              <li className="list-group-item">
                <strong>Height (in):</strong> {product.height}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              {/* <h3>About </h3> */}
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = productInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  //loading: state.movies.loading,
  product: state.products.product
});

export default connect(
  mapStateToProps,
  { fetchProduct }
)(Product);

