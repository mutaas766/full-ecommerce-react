import React from 'react'
import Navbar from './components/nav'
import { Dashboard } from './components/Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Women from './pages/women';
import Footer from './components/Dashboard/footer';
const App = () => {

  return (
    <CartProvider>
   <BrowserRouter>
  <div className="d-flex flex-column">

    <Navbar />

    <div className='me-2'> 
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/women" element={<Women />} />
      </Routes>
    </div>

    <Footer />

  </div>
</BrowserRouter>

</CartProvider>
  
  )
}

export default App