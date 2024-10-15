import "./App.css";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InfoSection } from "./components/InfoSection";
import { WhoWeAre } from "./components/WhoWeAre";

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <InfoSection />
      <WhoWeAre />
      <Footer />
    </main>
  );
}

export default App;
