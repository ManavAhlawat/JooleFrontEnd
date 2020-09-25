import {applicationConstants} from "../constants";


const initialState = {
    text: '',
    products: [],
    //loading: false,
    product: []
}

export const compareReducer = (state=[],action)=>{
        switch (action.type){
            case applicationConstants.addCompare:
                state=[...state];
                //state.push(action.payload);
                
                state.push(action.payload);
                console.log(state)
                return state;
            case applicationConstants.clearCompare:
                state=[];
                return state;
            case applicationConstants.clearCompareById:
                console.log(state);
                console.log(action);
                let newState=state.filter(e=>{return e.id!==action.payload})
                console.log('adchisduhcu');
                console.log(newState);
                return newState;
            default:
                return state;

}

}
