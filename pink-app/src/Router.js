import { Route, Switch, useHistory } from "react-router-dom"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import SignupPage from "./components/SignupPage"
import ProfilePage from "./components/ProfilePage"
import ReportPage from "./components/ReportPage"
import Button from "@material-ui/core/Button"

const Router = () => {
    const history = useHistory();
    return (
      <div >
        <Button style={{borderRadius: 0}} variant="contained" color="primary" onClick={() => history.push("/")}> Home Page </Button>
        <Button style={{borderRadius: 0}} variant="contained" color="primary" onClick={() => history.push("/login")}> Login </Button>
        <Button style={{borderRadius: 0}} variant="contained" color="primary" onClick={() => history.push("/signUp")}> Sign up </Button>
        <Button style={{borderRadius: 0}} variant="contained" color="primary" onClick={() => history.push("/profile")}> Profile </Button>
        <Button style={{borderRadius: 0}} variant="contained" color="primary" onClick={() => history.push("/report")}> Report</Button>
        <Button style={{borderRadius: 0}} variant="contained" color="primary" onClick={() => history.push("/submit-receipt")}> tax receipt</Button>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/signup" component={SignupPage}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/report" component={ReportPage}/>
        </Switch>
      </div>
    );
  }

export default Router;