import {SEARCH_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCT} from '../_action/types';
import {applicationConstants} from '../constants';

const initialState = {
    text: '',
    products: [],
    //loading: false,
    product: []
}

export default function(state = initialState, action){
    switch (action.type){
        case SEARCH_PRODUCT:
            return{
                ...state,
                text: action.payload,
                //loading: false
            }
        
            case FETCH_PRODUCTS:
                return{
                    ...state,
                    products: action.payload,
                    //loading: false
                }
            
            case FETCH_PRODUCT:
                return{
                    ...state,
                    product: action.payload,
                    //loading: false
                }
            
            // case LOADING:
            //     return{
            //         ...state,
            //         loading: true
            //     }

            case applicationConstants.searchButton:

                state = {...state};
                state.product=[...action.payload];
                // console.log(state);
                return state;

            case applicationConstants.searchClearButton:
                state={...state};
                state.data=[...state.products];
                return state;

        default:
            return state
    }
}