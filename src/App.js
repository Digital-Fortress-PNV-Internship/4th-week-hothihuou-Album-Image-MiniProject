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

import Flowers from './components/Flowes';
import UserDetail from './components/detail/userDetail';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Slider/>
 
     
          <Switch>
            <Route path="/" exact component={UsersContainer} />
            <Route path="/user/:userId" exact component={UserDetail}/>
            <Route path="/travel" exact component={TravelContainer} />
            <Route path="/animal" exact component={AnimalsContainer} />
            <Route path="/flower" exact component={FlowersContainer} />
            <Route path="/flowers" exact component={Flowers} />
            <Route> 404 Not Found! </Route>
          </Switch>
          <Footer />
        </Router>

      </div>
    </Provider>

  );
}

export default App;