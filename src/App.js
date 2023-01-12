import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CompletedPurchase from "./components/CompletedPurchase";
import Cover from "./components/Cover";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Refugio from "./components/Refugio";
import Help from "./components/Help";
import Contact from "./components/Contact";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Cover />
      <Routes>
        <Route path={"/servicios"} element={<Services />} /> 
        <Route path={"/refugio"} element={<Refugio />} />
        <Route path={"/ayuda"} element={<Help />} />
        <Route path={"/contacto"} element={<Contact />} />
        <Route path={"/"} element={<AboutUs />}/>
        <Route path={"/category/:id"} element={<ItemListContainer />}/> 
        <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
        <Route path={"/cart"} element={<Cart />}/>
        <Route path={"/checkout"} element={<Checkout />}/>
        <Route path={"/completedpurchase/:id"} element={<CompletedPurchase/>}/>
        <Route path={"*"} element={<Error404 />}/>
      </Routes>
      <Footer />
   </BrowserRouter>
   </CartContextProvider>
  );
}

export default App;
