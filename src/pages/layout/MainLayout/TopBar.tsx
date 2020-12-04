import React,{FC} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  IconButton,
  Badge
} from '@material-ui/core';
import { Trans } from '@lingui/react';
import SettingsBrightnessOutlinedIcon from '@material-ui/icons/SettingsBrightnessOutlined';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../redux';
import { fetchSuccess, fetchSuccessdark } from '../../../redux/config/actions';


const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

const TopBar:FC<{className?:any}> = ({ className, ...rest }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const language = useSelector((state: ApplicationState) => state.config.language);
  const darkMode = useSelector((state: ApplicationState) => state.config.darkMode);

  const btnClick = () => {
    const lan = language === "en" ? "fa" : "en";
    dispatch(fetchSuccess(lan))
  }

  const btnClickDark = () => {
    const dark = darkMode === "dark" ? "light" : "dark";
    dispatch(fetchSuccessdark(dark))
  }

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
      <RouterLink to="/">
        <Typography
          color="secondary"
          variant="h2"
        >
        
        {language === "en" ? "Pay Panel" :"پنل سیستم جامع"}
          
          </Typography>
        </RouterLink>
        <Box flexGrow={1} />
          <IconButton color="inherit" onClick={btnClickDark}>
              <SettingsBrightnessOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" onClick={btnClick} >
           {language === "en" ? getUnicodeFlagIcon('ir'):getUnicodeFlagIcon('US')}
          </IconButton>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
