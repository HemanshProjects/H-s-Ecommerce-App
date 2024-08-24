import React from "react";
import Navbar from "../Components/Navbar";
import CategoryComponent from "../Components/CategoryComponent";
import ProductsComponent from "../Components/ProductsComponent";
import {CatContext} from "../CatContext";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="px-6 py-4 font-Poppins space-y-4">
      <Navbar />
      <CatContext>
        <CategoryComponent />
        <ProductsComponent />
        <Footer/>
      </CatContext>
    </div>
  );
};

export default Home;
