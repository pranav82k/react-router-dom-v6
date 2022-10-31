import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import AdminPage from './components/AdminPage';
import AuthRoute from './components/AuthRoute';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/admin" element={<AuthRoute><AdminPage /></AuthRoute>} />
        {/* 404 Route */}
        <Route path="*" element={<h2 style={{ textAlign: "center"}}>404 Not Found</h2>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
