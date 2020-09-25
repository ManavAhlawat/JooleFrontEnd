import React from "react";
import {CustomTable} from "../_components/CustomTable";
export const CompareDetail=(props)=>{
    const data=props.data;
    return(
        <CustomTable date={data} desc={"DESCRIPTION"}/>
    );
}