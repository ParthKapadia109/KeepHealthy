import React from 'react'
import './App.css'
import './effects.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import SelectedMeals from './Components/SelectedMeals'
import Cart from './Components/Cart'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Components/Footer'
import FAQ from './Pages/FAQ'
import ContactUs from './Pages/ContactUs'
import Checkoutpage from './Components/Checkoutpage'
import ProtectedRoute from './Components/ProtectedRoute'
import AuthWrapper from './Components/AuthWrapper'
import PaymentSuccess from './Components/PaymentSuccessfull'
import Error from './Pages/Error'
import Blogs from './Pages/Blogs'
import Meals from './Components/Meals'
import Login from './Components/Login'
import Register from './Components/Register'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51LAGlCSIVbDJvceE9SRuvWHjmYAJkAyJmvyLGWuOR2RWSleiPatwxQtGktSrvWU6BlIGlZvCx8JWFVOzTVfEylyP00iOj0Rnnl'); // Use your actual public key

function App() {

  return (
    <AuthWrapper>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/meals' element={<Meals />}></Route>
          <Route path='/meals/:id' element={<SelectedMeals />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route exact element={<ProtectedRoute />}> */}
          {/* <Elements stripe={stripePromise}> */}
            <Route exact path='/checkout' element={<Checkoutpage />}></Route>
          {/* </Elements> */}
          {/* </Route> */}
          <Route path='/paymentsuccess' element={<PaymentSuccess />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
