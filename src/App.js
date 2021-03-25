import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';  
import Home from './Home';
import About from './About';

function App() {
  return (
    // Ehtolause - jos jotain niin Home, jos jotain muuta niin About
    // Routella kerrotaan, jos olet etusivulla, näytä Component Home
    // exact = kaikki "sivut" alkaa kauttaviivalla / niin exact ohjaa etusivulle
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;
