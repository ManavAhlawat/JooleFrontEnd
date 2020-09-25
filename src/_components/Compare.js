import React, { Component } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeComparProduct} from "../_action/compare.action";
import {makeStyles} from "@material-ui/core/styles";
import {MaterialTableDemo} from "./MaterialTableDemo";
import {useHistory} from "react-router-dom";
import {applicationConstants} from "../constants";
import {addCompare} from '../constants';
import { Link } from 'react-router-dom';
import { CustomizedSnackbars } from './CustomizedSnackbars';
import { connect } from 'react-redux';
import { addCompareProduct } from '../_action/compare.action';
import { dispatch } from 'rxjs/internal/observable/pairs';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const Compare = (props) => {

    
    //const {product} = props.product;
    //console.log(product) 
    //console.log(props.product)
    //console.log(this.props)
    const compareProduct = useSelector(state => state.compare);
    console.log(compareProduct)
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(removeComparProduct())
    }
    const classes = useStyles();
    return (
        <div>
            {/*<CompareDetail data={compareProduct}/>*/}
            <MaterialTableDemo data={compareProduct}/>

            <Link to="/" className="btn btn-default text-dark">
                Go Back To Search
              </Link>
              
        </div>
    )

}

// export class Compare extends Component {
//     componentDidMount() {
//       //console.log(this.props.match.params.id);
//       //this.props.fetchProduct(this.props.match.params.id);
//       //this.props.setLoading();
//       //this.props.addCompareProduct
//       //this.props.addCompareProduct(this.props.product);
//       //dispatch(addCompareProduct(product))
//     }
//     render() {
//         //const compareProduct = useSelector(state => state.products);
//         //console.log(compareProduct)
//      // this.props.fetchProduct(this.props.match.params.id);
//       const { product } = this.props;
//       console.log(this.props)
//       //console.log(product)
//       return <div>
//                 {/*<CompareDetail data={compareProduct}/>*/}
//                   <MaterialTableDemo data={product}/>
      
//                  <Link to="/" className="btn btn-default text-dark">
//                        Go Back To Search
//                     </Link>
//               </div>;
//     }
    
// }

// const mapStateToProps = state => ({
//     product: state.products
//   });

//   export default connect(mapStateToProps, {addCompareProduct})(Compare);
  
