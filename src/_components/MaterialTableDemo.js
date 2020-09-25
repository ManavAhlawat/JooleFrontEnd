import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {useDispatch} from "react-redux";
import {removeCompareProductById} from "../_action/compare.action";
import { CustomizedSnackbars } from './CustomizedSnackbars';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export const MaterialTableDemo=(props)=> {
    console.log(props)
    const [state, setState] = React.useState({
        columns: [
            { title: 'Manufacturer', field: 'manufacturer' },
            { title: 'Series', field: 'series' },
            { title: 'Model', field: 'model' },
            { title: 'Use Type', field: 'useType' },
            { title: 'Application', field: 'application' },
            //{ title: 'Model', field: 'modelYear' },
            //{ title: 'Airflow', field: 'airflow' },
            { title: 'Max Power', field: 'maxPower', type: 'numeric' },
            //{ title: 'Diameter (in)', field: 'diameter' },
            { title: 'Height (in)', field: 'height' },
            { title: 'Model', field: 'model' },
            { title: 'Sound (dBA)', field: 'sound' },
        ],
        //image: props.data[0].image,
        data: props.data

    });
    const dispatch=useDispatch();
    //console.log(props.data[0].image)
    //console.log(props.data[1].image)
    

    return (<div>

        
        <MaterialTable
            icons={tableIcons}
            title="Products can be compared here ..."
            columns={state.columns}
            //image={state.image}
            data={state.data}
            editable={{
                onRowDelete: (oldData) =>{
                     console.log(oldData.id);
                    dispatch(removeCompareProductById(oldData.id));
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    });
                },
            }}
        />
        
        </div>
    );
}
