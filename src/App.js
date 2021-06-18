import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import HomePage from './views/homepage/homepage.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/'><HomePage/></Route>
      </Switch>
    </div>
  );
}

export default App;
