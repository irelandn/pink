import { Route, Switch, useHistory } from "react-router-dom"
import HomePage from "./components/HomePage"
import ProfilePage from "./components/ProfilePage"
import ReportPage from "./components/ReportPage"
import TaxreceiptPage from "./components/TaxreceiptPage"

const Router = () => {
    const history = useHistory();
    return (
      <div>
        <button onClick={() => history.push("/")}> Home Page </button>
        <button onClick={() => history.push("/profile")}> Profile </button>
        <button onClick={() => history.push("/report")}> Report</button>
        <button onClick={() => history.push("/submit-receipt")}> tax receipt</button>
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