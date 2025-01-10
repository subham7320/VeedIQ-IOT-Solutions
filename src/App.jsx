import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage";
import Solutions from "./Pages/Solutions";
import NavBar from "./components/NavBar";
import Services from "./Pages/Services";
import AboutPage from "./Pages/AboutPage";
import ProductsPage from "./Pages/ProductsPage";
import ContactUs from "./Pages/Contactus";


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/solutions" element={<Solutions/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
