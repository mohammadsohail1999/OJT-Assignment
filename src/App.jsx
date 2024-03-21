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
 
export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<></>} />
        </Routes>
      </Router>
      <Toaster />
    </Provider>
  );
}