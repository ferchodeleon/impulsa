import { Banner } from "./Banner";
import { Brands } from "./Brands";
import { Header } from "./Header";
import { InfoSection } from "./InfoSection";
import { Map } from "./Map";
import { Up } from "./Up";
import { WhoWeAre } from "./WhoWeAre";

export const Home = () => {
  return (
    <main style={{ position: "relative" }}>
      <Header />
      <Banner />
      <InfoSection />
      <WhoWeAre />
      <Brands />
      <Map />
      <Up />
    </main>
  );
};
