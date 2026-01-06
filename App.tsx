import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LocationHighlights from "./components/LocationHighlights";
import Pricing from "./components/Pricing";
import BentoFeatures from "./components/BentoFeatures";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full relative">
      <Navbar />
      <Hero />
      <LocationHighlights />
      <Pricing />
      <BentoFeatures />
      <Footer />
      <MobileActionBar />
    </main>
  );
};

export default App;