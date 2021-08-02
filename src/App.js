import logo from './logo.svg';
import './App.css';

import Footer from './components/footer/footer';
import Header from './components/Header/Header';
import Slide from './components/content/Slide';
import Content from './components/content';
import ProductListing from './components/content/ProductListing';
import ProductDetail from './components/content/ProductDetail';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import BodyData from './components/content/search';

function App() {
  return (
    <div>

     <Router>
        <Header/>
        <Slide/>
        <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/details/:productId" exact component={ProductDetail} />
        <Route> 404 Not Found! </Route>
        </Switch>
        <Footer/>
      </Router>
  


     {/* <BodyData/> */}
    </div>
    
  );
}

export default App;
