import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Heroes from "./components/heroes";
import CardFeatures from "./card_features";
import OurClient from "./components/our-client";
import Heroes2 from "./components/heroes-2";
import AboutMe from "./components/about-me";

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
      </main>
    </>
  );
}

export default App;
