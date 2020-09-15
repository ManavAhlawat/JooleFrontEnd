import axios from 'axios';
import {applicationConstants} from "../constants";
import {useSelector} from "react-redux";

const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime';


export const getProducts = () => {

    const token=localStorage.getItem('token');
    // const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0dHR0dHQiLCJleHAiOjE1OTk3OTgxMjMsImlhdCI6MTU5OTc4MDEyM30.Wav5jyMYji-zKyQp2kYJh1VE9xp45eBiQQjFdYtIAY5p-UmV25-QgMiEy_AGaMrm3ruwvvBD4RDFJCdjZuFD5g';
    const headers = {'Authorization':'Bearer '+token};
    const getProductsPromise = axios.get(`http://localhost:8080/resources`,
        {headers}
        // { withCredentials:true}
    );

    return {
        type: applicationConstants.Get_Product,
        payload: getProductsPromise
    };
};



export const getSearchResult = (filter, products) => {

    const newProducts = products.filter(e => {

        //e.pressure > filter.pressure[0] && e.pressure < filter.pressure[0] &&
        // return e > filter[0] && e < filter[1]
        // e.heatingSurface > filter.heatingSurface[0] && e.heatingSurface < filter.heatingSurface[1] &&
        // e.length > filter.length[0] && e.length < filter.length[1] &&
        // e.hight > filter.hight[0] && e.hight < filter.hight[1]
    });

    return {
        type: applicationConstants.searchButton,
        payload: newProducts
    };
}
export const clearSearch =()=>{
    return {
        type: applicationConstants.searchClearButton,
        payload: null
    }
}

