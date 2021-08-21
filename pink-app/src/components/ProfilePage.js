import {Typography} from "@material-ui/core"
import JobPage from "./JobPage"
//import ReportPage from "ReportPage"
import Button from "@material-ui/core/Button"
import { Route, Switch, useHistory } from "react-router-dom"
import ProfilePageRouter from "../routes/ProfilePageRouter"
import { useState } from "react";

function getJobTitles() {
    return ["Job 1", "Job 2", "Job 3"]
}

const ProfilePage = () =>{
    //link to job 1
    const history = useHistory();

    const [jobs, setJobs] = useState(getJobTitles());

    return (
        <Typography variant="h3">
            User's profile:jobs, add job, update account info is here
            <div> more text</div>
            <div> 
                {jobs.map((job) => {
                    return <Button variant="contained" color="primary" onClick={() => history.push("/job")}> {job} </Button>
                })};
            </div>
        </Typography>
    );
}

export default ProfilePage