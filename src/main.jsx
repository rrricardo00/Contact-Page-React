import React from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Produto from './Components/Produto';
import Contato from './Components/Contato';
import NotFound from './Components/NotFound';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='App'>
    <BrowserRouter>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Produtos />} />
          <Route path='produto/:id' element={<Produto />} />
          <Route path='contato' element={<Contato />} />
          <Route path='*' end element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
)
