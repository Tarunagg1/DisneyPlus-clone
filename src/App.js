import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/detail/:id" component={Details} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
