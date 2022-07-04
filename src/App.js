
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import RegistrPage from './components/registrationPages/RegistrPage';
import BodyPageTrello from './components/trelloPages/trelloBody/BodyPageTrello';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/registration"/>
        </Route>
        <Route path="/registration">
          <RegistrPage/>
        </Route>
        <Route path="/bodytrello">
          <BodyPageTrello/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
