import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {CustomizedSnackbars} from '../CustomizedSnackbars';
import {applicationConstants} from "../../constants";
import { useHistory } from "react-router-dom";
import {addCompareProduct} from "../../_action/compare.action";


export class ProductCard extends Component {
    state= { }
    render() { 
        const {product} = this.props;
        //console.log("Product from ProductCard ="+product)
        //console.log("ProductCard this.props = "+ this.props)
        console.log(product)

        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                <img className="w-100 mb-2" src={product.image} alt="Product Cover" />
                <h5 className="text-light card-title">
                    {product.manufacturer} 
                    <br></br>
                    {product.series}
                    <br></br>
                    {product.model}
                    {/* <br></br>
                    {product.airflow} */}
                    <br></br>
                    
                    {/* <br></br>
                    {product.diameter} */}
                </h5>
                <h6 className="text-light">
                {product.maxPower} W at max speed
                    <br></br>
                    {product.sound} dBA at max speed
                    </h6>
                <Link className="btn btn-primary" to={'/product/' + product.productID}>
                    Product Details
                    <i className="fas fa-chevron-right" />
                </Link>
                <CustomizedSnackbars onClick={() => {
                                    console.log(product.productID);
                                    dispatch(addCompareProduct(product))
                                    //console.log(addCompareProduct(product))
                                }} product={product}> </CustomizedSnackbars>
                </div>
            </div>
          );
    }
}

 
export default ProductCard;