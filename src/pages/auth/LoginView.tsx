import React, { useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import { Trans } from '@lingui/macro';
import { ApplicationState } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuccess } from '../../redux/config/actions';
import JsonPlayer from '../../components/jsonsPlayer'
import { fetchRequest } from '../../redux/users/actions';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    textAlign:'left'
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useHistory();
  const language = useSelector((state: ApplicationState) => state.config.language);
  const access = useSelector((state: ApplicationState) => state.users.data.access);
  const dispatch = useDispatch();

  const btnClick = () => {
    const lan = language === "en" ? "fa" : "en";
    dispatch(fetchSuccess(lan))
  }
  useEffect(() => {
    if(access!=="")
    navigate.push('/', { replace: true });
  }, [access])

  return (
    <Page
      title="Login"
      className={classes.root}
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
        <JsonPlayer loading loop={true} jsonName={"everyting"} width={40} height={30} />
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().max(255).required('user is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(validationSchema) => {
              dispatch(fetchRequest(validationSchema))
              
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    <Trans>
                    Sign in
                    </Trans>
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    <Trans>
                    login with email address
                    </Trans>
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
               
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
             
                  </Grid>
                </Grid>
              
                <TextField
                  error={Boolean(touched.username && errors.username)}
                  fullWidth
                  helperText={touched.username && errors.username}
                  label="User Name"
                  margin="normal"
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.username}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    <Trans>
                    Sign in now
                    </Trans>
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  <Trans>
                  Change Language
                  </Trans>
                  {' '}
                  <Link
                    component={RouterLink}
                    onClick={btnClick}
                    to="#"
                    variant="h6"
                  >
                   {language==="en"? "فارسی":"English"}
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
