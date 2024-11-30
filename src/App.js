import './components/Styles.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import Order from './components/Order';
import OrderCustomization from './components/OrderCustomization';
import { CartProvider } from './context/CartContext';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </Router>
  );
};

const MainApp = () => {
  const location = useLocation(); 
  
  const isSignUpPage = location.pathname === '/';

  return (
    <div className="app">
      {!isSignUpPage && <Navbar />}
      
      <div className="app-content">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-cust" element={<OrderCustomization />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>

      {!isSignUpPage && <Footer />}
    </div>
  );
};

export default App;
