import { makeStyles } from "@material-ui/core";
import React, { FC, } from "react";
import JsonPlayer from "../../components/jsonsPlayer";
import Page from "../../components/Page";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
        direction:'ltr'
    }
}));

const Home: FC = () => {

    const classes = useStyles();
    return (
        <Page
            title="Dashboard"
            className={classes.root}
        >
              <JsonPlayer loading loop={true} jsonName={"dashboard"} width={80} height={60} />
        </Page>
    );
};

export default Home










