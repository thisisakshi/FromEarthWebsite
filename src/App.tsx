import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Bestsellers } from "./components/Bestsellers";
import { BulkOrder } from "./components/BulkOrder";
import { Footer } from "./components/Footer";

function HomePagePromo1() {
  return (
    <div className="flex items-center justify-center my-20">
      <img className="w-full lg:w-1/2" src="images/from-earth-free-of.jpg" />
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Bestsellers />
      <HomePagePromo1 />
      <BulkOrder />
      <Footer />
    </div>
  );
}

export default App;
