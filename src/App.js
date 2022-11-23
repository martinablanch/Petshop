import React from "react";
import Animales from "./components/Animales";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
   <div>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a BARTO Petshop"}/>
    <Animales />
    <Footer />

   </div>
  );
}

export default App;
