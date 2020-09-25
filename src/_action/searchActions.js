import {SEARCH_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCT} from './types';
import {applicationConstants} from "../constants";
import axios from 'axios';
//import {APIkey} from '../APIkey';

export const searchProduct = text => dispatch => {
    dispatch({
        type: SEARCH_PRODUCT,
        payload: text
    });
};


export const fetchProducts = text => dispatch => {
     //axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&s=${text}`)
     //console.log(JSON.parse(localStorage.getItem('currentUser')).token);
     const headers = {'Authorization':'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token}
    axios.get(`http://localhost:8080/products`,{headers})
    .then(response => dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    }))
    .catch(err => console.log(err));
    //console.log(text);
}

export const fetchProduct = id => dispatch => {
    // axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&i=${id}`)
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `http://localhost:8080/productByID/${id}`;
    const headers = {'Authorization':'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token}
    console.log(JSON.parse(localStorage.getItem('currentUser')).token);
    axios.get(url,{headers})
    .then(response => dispatch({
        type: FETCH_PRODUCT,
        payload: response.data
        
    }))
    .catch(err => console.log(err));

}

// export const setLoading = () => {
//     return {
//         type: LOADING
//     }
// }

export const getSearchResult = (filter, products) => {

    const newProducts = products.filter(e => {

        //e.pressure > filter.pressure[0] && e.pressure < filter.pressure[0] &&
        return e.airflow >= filter.airflow[0] && e.airflow <= filter.airflow[1] &&
            e.maxPower >= filter.maxPower[0] && e.maxPower <= filter.maxPower[1] &&
            e.maxSpeed >= filter.maxSpeed[0] && e.maxSpeed <= filter.maxSpeed[1] &&
            e.diameter >= filter.diameter[0] && e.diameter <= filter.diameter[1] &&
            e.firm >= filter.firm[0] && e.firm <= filter.firm[1] &&
            e.global >= filter.global[0] && e.global <= filter.global[1]
    });

    return {
        type: applicationConstants.searchButton,
        payload: newProducts
    };
}
export const clearSearch = () => {
    return {
        type: applicationConstants.searchClearButton,
        payload: null
    }
}
