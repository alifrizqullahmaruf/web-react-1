import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Heroes from "./components/heroes";
import CardFeatures from "./card_features";
import OurClient from "./components/our-client";
import Heroes2 from "./components/heroes-2";
import AboutMe from "./components/about-me";
import Heroes3 from "./components/Heroes3";
import AboutMe2 from "./components/AboutMe2";
import AboutMe3 from "./components/AboutMe3";
import FooterPage from "./components/Fotter";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Heroes />
        <OurClient />
        <CardFeatures />
        <Heroes2 />
        <AboutMe />
        <Heroes3 />
        <AboutMe2 />
        <AboutMe3 />
        <FooterPage />
      </main>
    </>
  );
}

export default App;
