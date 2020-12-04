import React, { FC, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from '../../../utils/getInitials';
import { Trans } from '@lingui/macro';
import { ApplicationState } from '../../../redux';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

interface Iuser{
    id: number,
    last_login?: string,
    username: string,
    type?: string,
    status?: boolean,
    person_id?: number,
    is_superuser: boolean
}



const Results: FC<{ className?: any, users: Iuser[] }> = ({ className, users, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([0]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const language = useSelector((state: ApplicationState) => state.config.language);

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds: number[] ;

    if (event.target.checked) {
      newSelectedCustomerIds = users.map((customer: Iuser) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: any, id: number) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds: any = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === users.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < users?.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  <Trans>
                    Name
                  </Trans>
                </TableCell>
                <TableCell>
                  <Trans>
                    Type
                </Trans>
                </TableCell>
                <TableCell>
                  <Trans>
                    Status
                </Trans>
                </TableCell>
                <TableCell>
                  <Trans>
                    Person ID
                </Trans>
                </TableCell>
                <TableCell>
                <Trans>
                Last Login
                </Trans>
                </TableCell>
                <TableCell>
                <Trans>
                Superuser
                </Trans>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.slice(0, limit).map((customer: Iuser) => (
                <TableRow
                  hover
                  key={customer.id}
                selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                        checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                       onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={""}
                      >
                        {getInitials(customer.username)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.username}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.type}
                  </TableCell>
                  <TableCell>
                    {customer.status}
                  </TableCell>
                  <TableCell>
                    {customer.person_id}
                  </TableCell>
                  <TableCell>
                    {customer.last_login}
                  </TableCell>
                  <TableCell>
                  <Checkbox
                      checked={customer.is_superuser}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={users ?users?.length:0}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        labelRowsPerPage={language === "en" ?"Rows per page":"ردیف در هر صفحه"}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};



export default Results;
