import React, { Component } from 'react';
import  {connect} from 'react-redux';
import ProductCard from './ProductCard';

export class ProductsContainer extends Component {

    render() { 
        const {products} = this.props;
        //console.log("Products from ProductsContainer ="+ products)
        //console.log("ProductsContainer this.props ="+this.props)
        let content = '';
        console.log(products);
        content = products.map((product, index) => <ProductCard key={index} product={product} />);
        //products.Response == "True" ?  : null;
        console.log(content);
        return ( 
            <div className="row">
                {content}
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
    products: state.products.products
})

export default connect(mapStateToProps)(ProductsContainer);