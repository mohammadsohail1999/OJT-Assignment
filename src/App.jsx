// import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@mui/material";
import {BrowserRouter as Router} from "react-router-dom";
import Header from './components/Header';
import {Provider} from "react-redux";
import { store } from './redux/store';
import Productdetails from './pages/Productdetails';

function App() {

  return (
    <Provider store={store}>
          <CssBaseline />
          <Router>
            <Header/>
            <Productdetails/>
          </Router>
    </Provider>
  )
}

export default App
