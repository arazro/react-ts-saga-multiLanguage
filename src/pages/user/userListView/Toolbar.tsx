import React, { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../redux';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar:FC<{className?:any}> = ({ className, ...rest }) => {
  const language = useSelector((state: ApplicationState) => state.config.language);
  const classes = useStyles();
  const navigate = useHistory();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button className={classes.importButton}>
          <Trans>
          Import
          </Trans>
        </Button>
        <Button className={classes.exportButton}>
          <Trans>
          Export
          </Trans>
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={()=> navigate.push('/account')}
        >
          <Trans>
          Add customer
          </Trans>
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder={language === "en" ?"Search user":"جستجوی کاربر"}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
