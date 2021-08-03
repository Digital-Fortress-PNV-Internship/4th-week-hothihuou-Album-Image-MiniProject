import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/Header/Header';

import UsersContainer from './components/UsersContainer';
import Footer from './components/footer/footer';
import Slider from './components/Slide';
import AnimalsContainer from './components/AnimalsContainer';
import FlowersContainer from './components/FlowersContainer';
import TravelContainer from './components/TravelContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AnimalsDetail from './components/AnimalsDetail';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Slider/>
         
          <Switch>
            <Route path="/" exact component={UsersContainer} />
            <Route path="/travel" exact component={TravelContainer} />
            <Route path="/animal" exact component={AnimalsContainer} />
            <Route path="/animal:id" component={AnimalsDetail}/>
            <Route path="/flower" exact component={FlowersContainer} />
            <Route> 404 Not Found! </Route>
          </Switch>
          <Footer />
        </Router>

      </div>
    </Provider>

  );
}

export default App;
