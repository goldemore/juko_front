import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer"
import AbousUs from "./pages/AbousUs";
import Technologies from "./pages/Technologies";
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory";
import SinglePagePro from "./components/SinglePagePro/SinglePagePro";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AbousUs/>}/>
        <Route path="/technologies" element={<Technologies/>}/>
        <Route path="/:category" element={<ProductsByCategory/>}/>
        <Route path="/product/:id" element={<SinglePagePro/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
