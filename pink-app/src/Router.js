import { Route, Switch, useHistory } from "react-router-dom"
import HomePage from "./components/HomePage"
import ProfilePage from "./components/ProfilePage"
import ReportPage from "./components/ReportPage"
import TaxreceiptPage from "./components/TaxreceiptPage"
import Button from "@material-ui/core/Button"

const Router = () => {
    const history = useHistory();
    return (
      <div >
        <Button variant="contained" color="primary" onClick={() => history.push("/")}> Home Page </Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/profile")}> Profile </Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/report")}> Report</Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/submit-receipt")}> tax receipt</Button>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/report" component={ReportPage}/>
          <Route path="/submit-receipt" component={TaxreceiptPage}/>
        </Switch>
      </div>
    );
  }

export default Router;