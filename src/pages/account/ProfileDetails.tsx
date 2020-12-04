import React, { FC, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import { Trans,t } from '@lingui/macro';
import { ApplicationState } from '../../redux';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import {postUserApi} from '../../services/api/users'
import { useHistory } from 'react-router-dom';



const states = [
  {
    value: '1',
    label: 'active',
    flabel: 'فعال'
  },
  {
    value: '0',
    label: 'deactive',
    flabel: 'غیز فعال'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails:FC<{ className?: any}> = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useHistory();
  const language = useSelector((state: ApplicationState) => state.config.language);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: ''
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = async(data:any) => {
   await postUserApi(data)
   navigate.push('/users')
  }

  const handleChange = (event:any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card>
        <CardHeader
          subheader={language === "en" ?"The information can be edited":"افزودن یا ویرایش مشخصات"}
          title={language === "en" ?"Profile":"پروفایل"}
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                //helperText="Please specify the first name"
                label={language === "en" ?"First name":"نام"}
                name="firstName"
                onChange={handleChange}
                //required
                //value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label={language === "en" ?"Last name":"نام خانوادگی"}
                name="lastName"
                onChange={handleChange}
                //required
                //value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                  //error={Boolean(touched.password && errors.password)}
                  fullWidth
                 // helperText={touched.password && errors.password}
                  label={language === "en" ?"User Name":"نام کاربری"}
                  name="username"
                //  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  inputRef={register}
                 // value={values.password}
                  variant="outlined"
                />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label={language === "en" ?"Status":"وضعیت"}
                name="status"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {language === "en" ?option.label:option.flabel}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                  //error={Boolean(touched.password && errors.password)}
                  fullWidth
                 // helperText={touched.password && errors.password}
                  label={language === "en" ?"Password":"رمز عبور"}
                  required
                  name="password"
                //  onBlur={handleBlur}
                  onChange={handleChange}
                  inputRef={register}
                  type="password"
                 // value={values.password}
                  variant="outlined"
                />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                  //error={Boolean(touched.password && errors.password)}
                  fullWidth
                 // helperText={touched.password && errors.password}
                  label={language === "en" ?"Password":"تکرار رمز عبور"}
                  required
                  name="password"
                //  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                 // value={values.password}
                  variant="outlined"
                />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            <Trans>
            Save 
            </Trans>
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
