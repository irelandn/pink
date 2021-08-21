import {Typography} from "@material-ui/core"
import JobPage from "./JobPage"
//import ReportPage from "ReportPage"
import Button from "@material-ui/core/Button"
import { Route, Switch, useHistory } from "react-router-dom"
import { useState } from "react";

// imports copied from HomePage

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
// end imports

// copied from HomePage
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



function getJobTitles() {
    // retrieve jobs from the database
    return ["Job 1", "Job 2", "Job 3"]
}

const ProfilePage = () =>{
    //link to job 1
    const history = useHistory();

    const [jobs, setJobs] = useState(getJobTitles());

    // copied from HomePage
    const classes = useStyles();

    return (
        <Typography variant="h3">
            User's profile:jobs, add job, update account info is here
            <div> more text</div>
            <div> 
                {jobs.map((job) => {
                    return (
                        <Grid
                        container
                        direction="row"
                        justifyContent="left"
                        alignItems="center"
                        >
                            <div className={classes.paper}>
                                <Typography component="h1" variant="h5" onClick={() => history.push("/job")}>
                                    {job}
                                </Typography>
                            </div>
                        </Grid>

                    );
                })}
            </div>
        </Typography>
    );
}

export default ProfilePage