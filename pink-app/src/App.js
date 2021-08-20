import './App.css';
import Router from "./Router";
import {  Container } from '@material-ui/core';
import ProfilePage from "./components/ProfilePage"

function App() {
  return (
    <div className="Pink-App" >
      <Container>
        <Router />
        
      </Container>
    </div>
  );
}

export default App;
