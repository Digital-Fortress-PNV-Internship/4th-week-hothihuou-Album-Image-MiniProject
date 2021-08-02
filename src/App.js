import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/Header/Header';

import UsersContainer from './components/UsersContainer';
import Footer from './components/footer/footer';
import Slider from './components/Slide';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Slider/>
        <UsersContainer/>
        <Footer/>
        
      </div>
    </Provider>

  );
}

export default App;
