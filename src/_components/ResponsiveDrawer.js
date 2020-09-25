import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { userService, authenticationService } from '@/_services';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import { RangeSlider } from './RangeSlider';
import {useDispatch, useSelector} from "react-redux";
import {applicationConstants} from "../constants";
import {NavLink} from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getSearchResult, clearSearch } from '../_action/searchActions';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Landing from './Home/Landing';
import Product from './Home/Product';
import store from '../store';
import { isAbsolute } from 'path';
import {Compare} from './Compare';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'absolute',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#ADD8E6'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    // flexGrow: 1,
    //padding: theme.spacing(3),
    width: 900,
    padding:0,
    margin:0,
    // height: 100,
    //width: 100
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      {/* <div className={classes.drawerHeader}>
                    <Typography className={classes.heading}>Filter</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
      </div>
      <Divider/> */}


      <div className={classes.drawerHeader}>
        
                    {/* <Button size="small" color="primary" style={{margin: "auto"}} onClick={handleOnSearch}>
                        Search
                    </Button> */}
                    <Button size="small" color="primary" style={{margin: "auto"}}>
                        Save
                    </Button>
                    <Button size="small" color="primary" style={{margin: "auto"}}>
                        Clear
                    </Button>
      </div>
      <Divider/>

      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography component={'span'} variant={'body2'} className={classes.heading}>Model Year</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant={'body2'}>
                            <RangeSlider min={2000} max={2020} setValue={handleSetYear}/>
                            {/*<TextField id="standard-basic" label="Model year" />*/}
                        </Typography>
                    </AccordionDetails>
            </Accordion>
      
            <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'span'} variant={'body2'} className={classes.heading}>Technical Specifications</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant={'body2'}>
                            Airflow (CFM)
                            <RangeSlider min={5000} max={10000} setValue={handleSetAirflow}/>
                            Max Power (W)
                            <RangeSlider min={9.84} max={96.52} setValue={handleSetMaxPower}/>
                            Sound at max speed (dBA)
                            <RangeSlider min={20} max={80} setValue={handleSetMaxSpeed}/>
                            Fan sweep diameter (in)
                            <RangeSlider min={18} max={96} setValue={handleSetFanSweepDiameter}/>
                          
                            {/*<TextField id="standard-basic" label="Model year" />*/}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'span'} variant={'body2'} className={classes.heading}> Brand </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant={'body2'}>
                            
                            {/*<RangeSlider min={2000} max={2020}/>*/}
                            {/*<TextField id="standard-basic" label="Model year" />*/}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'span'} variant={'body2'} className={classes.heading}> Past Selections </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant={'body2'}>
                            Firm
                            <RangeSlider min={0} max={10} setValue={handleSetFirm}/>
                            Global
                            <RangeSlider min={0} max={1492} setValue={handleSetGlobal}/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
    </div>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
};

const handleDrawerClose = () => {
    setOpen(false);
};

const handleSetYear = (e) => {
    dispatch({
        type: applicationConstants.searchYear,
        payload: [...e]
    });

};
const handleSetAirflow = (e) => {
    dispatch({
        type: applicationConstants.searchAirflow,
        payload: [...e]
    });
};
const handleSetMaxPower = (e) => {
    dispatch({
        type: applicationConstants.searchMaxPower,
        payload: [...e]
    });
};
const handleSetMaxSpeed = (e) => {
    dispatch({
        type: applicationConstants.searchMaxSpeed,
        payload: [...e]
    });
};

const handleSetFanSweepDiameter = (e) => {
    dispatch({
        type: applicationConstants.searchFanSweepDiameter,
        payload: [...e]
    });
};


const handleSetFirm = (e) => {
  dispatch({
      type: applicationConstants.searchFirm,
      payload: [...e]
  });
}

const handleSetGlobal = (e) => {
  dispatch({
      type: applicationConstants.searchGlobal,
      payload: [...e]
  });
}

    //const filter = useSelector(state => state.filter);
    //console.log(filter)
    //const products = useSelector(state => state.product.products)
    // const handleOnSearch = () => {
    //     console.log(filter);
    //     dispatch(getSearchResult(filter.filter, products));
    // }
    // const handleOnClear = () => {
    //     dispatch(clearSearch());
    // }
    // console.log(props.children);

  const container = window !== undefined ? () => window().document.body : undefined;

  const currentUser = authenticationService.currentUserValue;

  const logout = () => {
    authenticationService.logout();
    history.push('/login');
};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography component={'span'} variant={'body2'} variant="h6" noWrap>
            Joole
           </Typography>
           

          {/* <Typography component={'span'} variant={'body2'} variant="h6" noWrap>
            <Link to="/">Home</Link>
           </Typography> */}
           {/* <hr></hr> */}

           {/* <NavLink to="/#/productCompare">
                        <Typography variant="h6" className={classes.title}>
                            <Button> Product Compare</Button>
                        </Typography>
            </NavLink> */}
           
           <hr></hr>
           <hr></hr>
           <hr></hr>
           <hr></hr>
           <hr></hr>
           <hr></hr>


           <Typography component={'span'} variant={'body2'} variant={"h6"} className={classes.title}>
           Welcome { currentUser.username }!
           </Typography>

           <hr></hr>

           <Typography component={'span'} variant={'body2'} variant={"h6"} className={classes.title}>
                        <Button onClick={logout}> Sign out</Button>
           </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            
            {drawer}

            <div className={classes.drawerHeader}>
                    <Typography component={'span'} variant={'body2'} className={classes.heading}>Filter</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
            </div>
            <Divider/>
          
            <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography component={'span'} variant={'body2'} className={classes.heading}>Model Year</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant={'body2'}>
                            <RangeSlider min={2000} max={2020} setValue={handleSetYear}/>
                            {/*<TextField id="standard-basic" label="Model year" />*/}
                        </Typography>
                    </AccordionDetails>
            </Accordion>
          

            
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        {/* <Typography component={'span'} variant={'body2'} variant={"h6"} className={classes.title}> */}
        <Provider store={store}>
          <Router>
            <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/productCompare" component={Compare}/>
            </div>
          </Router>
        </Provider>
        {props.children}
        {/* <div style={{width: "100%"}} > */}
        {/* hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav
        hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav
        hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav
        hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav
        hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav
        hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav
        hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav hi I am Manav
        hi I am Manav */}
        {/* </div> */}
        {/* </Typography>  */}
        
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export  { ResponsiveDrawer };
