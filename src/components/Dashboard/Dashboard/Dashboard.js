import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import Makeadmin from '../Makeadmin/Makeadmin';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../../hook/useAuth';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import AddProduct from '../AddProduct/AddProduct';
import Login from '../../Login/Login/Login';
import ManageProduct from '../ManageProduct/ManageProduct';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const { admin,logOut } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/home"><Button color="inherit">Home</Button></Link>
          <Link to={`${url}`}><Button color="inherit">Dashbord</Button></Link>
          {admin?
            <Box>
              <Link style={{margin: '40px', color: "gray", textDecoration: "none"}} to={`${url}/manageOrder`}><Button style={{marginTop: "20px", fontSize: "16px"}} color="inherit">Manage All Order</Button></Link>

              <Link style={{margin: '40px', color: "gray", textDecoration: "none"}} to={`${url}/makeAdmin`}><Button style={{marginTop: "20px", fontSize: "16px"}} color="inherit">Make Admin</Button></Link>

              <Link style={{margin: '40px', color: "gray", textDecoration: "none"}} to={`${url}/addProduct`}><Button style={{marginTop: "20px", fontSize: "16px"}} color="inherit">Add A Product</Button></Link>

              <Link style={{margin: '40px', color: "gray", textDecoration: "none"}} to={`${url}/manageProduct`}><Button style={{marginTop: "20px", fontSize: "16px"}} color="inherit">Manage Products</Button></Link>

              <Link style={{margin: '40px', color: "gray", textDecoration: "none"}} to="/login"><Button style={{marginTop: "20px", fontSize: "16px"}} onClick={logOut} color="inherit">Logout</Button></Link>
            </Box>
          :
          <Box>
            <Link style={{margin: '40px', color: "gray", textDecoration: "none"}} to={`${url}/myorder`}><Button style={{marginTop: "20px", fontSize: "16px"}} color="inherit">My Order</Button></Link><br />

            <Link style={{margin: '40px',color: "gray", textDecoration: "none"}} to={`${url}/payment`}><Button style={{marginTop: "20px", fontSize: "16px"}} color="inherit">Payment</Button></Link><br />

            <Link style={{margin: '40px', color: "gray", textDecoration: "none"}} to={`${url}/review`}><Button style={{marginTop: "20px", fontSize: "16px"}} color="inherit">Review</Button></Link><br />

            <Link style={{margin: '40px', color: "gray", textDecoration: "none"}} to="/login"><Button style={{marginTop: "20px", fontSize: "16px"}} onClick={logOut} color="inherit">Logout</Button></Link>
          </Box>
        }
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/myorder`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/payment`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <Makeadmin></Makeadmin>
          </Route>
          <Route path={`${path}/manageOrder`}>
            <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
          </Route>
        </Switch>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
