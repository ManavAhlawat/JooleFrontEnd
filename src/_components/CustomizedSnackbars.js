import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {addCompareProduct} from "../_action/compare.action";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const CustomizedSnackbars = (props)=> {
    console.log(props.product)
    const dispatch=useDispatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
        //console.log(props.product)
        dispatch(addCompareProduct(props.product));
        //console.log(dispatch(addCompareProduct(props.product)))
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            {/* <Button variant="outlined" onClick={handleClick} class="btn btn-danger">
                Compare
            </Button> */}
            <Link className="btn btn-primary" onClick={handleClick} to={'/productCompare'}>
                    Compare
                    <i className="fas fa-chevron-right" />
                </Link>
            {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    success add to compare
                </Alert>
            </Snackbar> */}
        </div>
    );
}