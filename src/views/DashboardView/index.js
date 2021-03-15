/* eslint-disable */
import React, { useState, useReducer } from 'react'
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import authState from '../../initialstate'
import Page from 'src/components/Page';
import {
    useDispatch, useSelector
  } from 'react-redux';
import {auth} from '../../redux'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
    const [state,dispatch] = useReducer(auth,authState);
    const { loading, success, user } = useSelector((state) => state.auth); 
    console.log("user in dashboard from selector",user)
    console.log("state is ,",state)
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
      <h1>Dashboard</h1>
      </Container>
    </Page>
  );
};

export default Dashboard;
