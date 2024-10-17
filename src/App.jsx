import "./App.css";
import { Banner } from "./components/Banner";
import { Brands } from "./components/Brands";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InfoSection } from "./components/InfoSection";
import { Map } from "./components/Map";
import { Speakers } from "./components/Speakers";
import { WhoWeAre } from "./components/WhoWeAre";

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <InfoSection />
      <WhoWeAre />
      <Speakers />
      <Brands />
      <Map />
      <Footer />
    </main>
  );
}

export default App;
