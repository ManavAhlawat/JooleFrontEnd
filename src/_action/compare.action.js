import {applicationConstants} from "../constants";

export const addCompareProduct=(product)=>{
    //console.log(product)
    return {
        type: applicationConstants.addCompare,
        payload: product
    }
}
export const removeCompareProductById=(productID)=>{
    return{
        type:applicationConstants.clearCompareById,
        payload: productID
    }
}
export const removeComparProduct=()=>{
    return {
        type:applicationConstants.clearCompare,
        payload: null
    }
}
