<<<<<<< HEAD
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
=======
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Homepage from "./pages/Homepage";
import { Toaster } from "react-hot-toast";
>>>>>>> 06bc68b523c5525c408cc849644ed5e8cd2d24d3

function App() {
  return (
    <Provider store={store}>
<<<<<<< HEAD
          <CssBaseline />
          <Router>
            <Header/>
            <Productdetails/>
          </Router>
=======
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<></>} />
        </Routes>
      </Router>
      <Toaster />
>>>>>>> 06bc68b523c5525c408cc849644ed5e8cd2d24d3
    </Provider>
  );
}

export default App;
