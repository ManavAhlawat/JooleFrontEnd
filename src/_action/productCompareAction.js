import {applicationConstants} from "../constants";

export const addCompareProduct=(p)=>{
    return {
        type: applicationConstants.addCompare,
        payload: p
    }
}
export const removeCompareProductById=(id)=>{
    return{
        type:applicationConstants.clearCompareById,
        payload: id
    }
}
export const removeComparProduct=()=>{
    return {
        type:applicationConstants.clearCompare,
        payload: null
    }
}
