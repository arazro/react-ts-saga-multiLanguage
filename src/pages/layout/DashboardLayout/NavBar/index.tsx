import React, { useEffect ,FC} from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../../redux';
import { Trans } from '@lingui/macro';
import { fetchUser } from '../../../../redux/users/actions';




const items = [
  {
    href: '/',
    icon: BarChartIcon,
    title: 'Dashboard',
    ftitle: 'داشبرد'
  },
  {
    href: '/users',
    icon: UsersIcon,
    title: 'Users List',
    ftitle: 'لیست کاربرها'
  },
  {
    href: '/',
    icon: UserIcon,
    title: 'Account',
    ftitle: 'حساب'
  },
  {
    href: '/',
    icon: SettingsIcon,
    title: 'Settings',
    ftitle: 'تنظیمات'
  },
  {
    href: '/account',
    icon: UserPlusIcon,
    title: 'Register',
    ftitle: 'ثبت کاربر'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 200
  },
  desktopDrawer: {
    width: 200,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar:FC<{onMobileClose:any, openMobile:any}> = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const language = useSelector((state: ApplicationState) => state.config.language);
  const dispatch = useDispatch();
  const user = useSelector((state: ApplicationState) => state.users.user);
  
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  
  }, [location.pathname]);

   useEffect(() => {
    dispatch(fetchUser())
  
  }, []);  
  useEffect(() => {

  }, [user]); 

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={""}
          to="/account"
        />
        <Typography
          className={classes.desktopDrawer}
          color="textPrimary"
          variant="h5"
        >
          
        </Typography>
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user?.username}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {""}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={language==="en" ?item.title:item.ftitle}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
       
        
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor= "left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};



export default NavBar;
