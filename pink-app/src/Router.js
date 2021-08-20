import { Route, Switch } from "react-router"
import HomePage from "./components/HomePage"
import ProfilePage from "./components/ProfilePage"

const Router = () =>(
    <Switch>
        <Route path="/" component={HomePage}/>
        <Route path="/profile" component = {ProfilePage}/>
    </Switch>
);

export default Router;