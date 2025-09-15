import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Updates from "./components/Updates";
import Help from "./components/Help";
import Subcribe from "./components/Subcribe";
import Work from "./components/Work";
import News from "./components/News";
import QuoteCard from "./components/QuoteCard";
import Team from "./components/Team";
import TeamTheme from "./components/TeamTheme";
import Choose from "./components/Choose";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import Bootstrap from "./components/Bootstrap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Home />
      <div>
        <About />
        <Services />
      </div>
      <Updates />
      <Help />
      <Subcribe />
      <Work />
      <News />
      <QuoteCard />
      <Team />
      <TeamTheme />
      <Choose />
      <Video />
      <Testimonials />
      <Bootstrap />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
