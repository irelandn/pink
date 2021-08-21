import {Typography} from "@material-ui/core"
import { Route, Switch, useHistory } from "react-router-dom"



const JobPage = () => {
    const history = useHistory();
    return (
        <Typography variant="h3">
            MADE IT TO THE JOBS PAGE!!!
            <div> and here is info about your job </div>
            <div> and even more!!</div>
        </Typography>
    );
}

export default JobPage