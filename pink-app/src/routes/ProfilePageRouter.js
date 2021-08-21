import { Route, Switch, useHistory } from "react-router-dom"
import JobPage from "../components/JobPage"
import Button from "@material-ui/core/Button"

const ProfilePageRouter = () => {
    const history = useHistory();
    return (
      <div >
        {/*<Button variant="contained" color="primary" onClick={() => history.push("/")}> Home Page </Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/profile")}> Profile </Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/report")}> Report</Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/submit-receipt")}> tax receipt</Button>
        */ }
        <Switch>
          <Route path="/job" component={JobPage}/>
        </Switch>
      </div>
    );
  }

export default ProfilePageRouter;