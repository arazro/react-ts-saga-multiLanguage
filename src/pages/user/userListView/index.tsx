import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList } from '../../../redux/users/actions';
import { ApplicationState } from '../../../redux';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    direction:'ltr'
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state: ApplicationState) => state.users.users);

  useEffect(() => {
    dispatch(fetchUserList())
  
  }, []);  
  useEffect(() => {

  }, [users]); 

  return (
    <Page
    className={classes.root}
      title="users"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
        {users &&  <Results users={users} />}
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
