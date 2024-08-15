import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import NavigationBar from "./components/home/NavigationBar";
import SignUpForm from "./components/SignUpForm";
import CartPage from "./components//home/CartPage";
import Merchant from "./components/merchant/Merchant";
import Footer from "./components/home/Footer";
import AboutUs from "./components/AboutUs";
import SignInForm from "./components/SignInForm";
import FarmerPage from "./components/farmer/FarmerPage";
import ContactUs from "./components/contactUs/ContactUs"


const ConditionalNavigationBar = () => {
  const location = useLocation();
  return location.pathname !== "/" ? <NavigationBar /> : null;
};

function App() {
  return (
    <Router>
      <ConditionalNavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/farmer" element={<FarmerPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<CartPage />} />
          
        </Routes>
        <Footer />
      </Router>
      // </>
    )
}

export default App;

       
    