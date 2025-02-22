import Hero from "./sections/Hero";
import About from "./sections/About";
import Principles from "./sections/Principles";
import Meetups from "./sections/Meetups";
import SuccessEvents from "./sections/SuccessEvents";
import Footer from "./sections/Footer";
import "./index.css";

import "@fontsource/montserrat"; // Import Montserrat font

function App() {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="principles"><Principles /></div>
      <div id="meetups"><Meetups /></div>
      <div id="events"><SuccessEvents /></div>
      <Footer />
    </div>
  );
}

export default App;
