import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import Homepage from "./pages/Homepage";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import ThemeWrapper from "./components/ThemeWrapper";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/Productdetails";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeWrapper>
          <>
            <CssBaseline />
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/category/:id" element={<Homepage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/:id" element={<ProductDetails />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/cart" element={<CartPage />}/>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </>
          <Toaster />
        </ThemeWrapper>
      </PersistGate>
    </Provider>
  );
}
