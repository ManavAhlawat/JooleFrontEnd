import {combineReducers} from 'redux';
import searchReducer from './searchReducer';
import {compareReducer} from './compare.reducer';
import {filterReducer} from './filter.reducer';


export default combineReducers({
    products: searchReducer,
    compare: compareReducer,
    filter: filterReducer

});

// export const indexReducer = combineReducers({
//     //filter: filterReducer,
//     compare: compareReducer,
// })

