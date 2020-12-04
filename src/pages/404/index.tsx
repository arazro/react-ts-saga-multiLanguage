import React from 'react';
import logo from "../../assets/images/undraw_page_not_found_su7k.svg";
import {
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import { Trans } from '@lingui/macro';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="404"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
          >
           <Trans>404: The page you are looking for isn’t here</Trans> 
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
          >
              <Trans>
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
            </Trans>
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src={logo}
            />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFoundView;

