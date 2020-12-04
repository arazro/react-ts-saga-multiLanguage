import React, { useState, FC } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuccess, fetchSuccessdark } from '../../../redux/config/actions';
import { ApplicationState } from '../../../redux';
import { Trans } from '@lingui/macro';
import SettingsBrightnessOutlinedIcon from '@material-ui/icons/SettingsBrightnessOutlined';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { logout } from '../../../redux/users/actions';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar: FC<{ className?: any, onMobileNavOpen?: any }> = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [notifications] = useState([]);
  const language = useSelector((state: ApplicationState) => state.config.language);
  const darkMode = useSelector((state: ApplicationState) => state.config.darkMode);
  const navigate = useHistory();

  const btnClick = () => {
    const lan = language === "en" ? "fa" : "en";
    dispatch(fetchSuccess(lan))
  }

  const btnClickDark = () => {
    const dark = darkMode === "dark" ? "light" : "dark";
    dispatch(fetchSuccessdark(dark))
  }
  const btnClicklogout=()=>{
    dispatch(logout())
   //navigate.push("/login")
  }

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
        <Typography
          color="secondary"
          variant="h4"
        >
          <Trans>
          پنل سیستم جامع
          </Trans>
          </Typography>
        </RouterLink>
        <Box flexGrow={1} />
        <IconButton color="inherit" onClick={btnClickDark}>
              <SettingsBrightnessOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" onClick={btnClick} >
           {language === "en" ? getUnicodeFlagIcon('ir'):getUnicodeFlagIcon('US')}
          </IconButton>
          <IconButton color="inherit" >
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        
          <IconButton color="inherit" onClick={btnClicklogout} >
            <InputIcon />
          </IconButton>
          <Hidden mdDown>
          <IconButton color="inherit"  >
           
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};



export default TopBar;
