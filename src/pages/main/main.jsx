import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { HeroSection } from "../../components/hero-section/hero-section";
import { JoinSection } from "../../components/join-section/join-section";
import { MaterialsSection } from "../../components/materials-section/materials-section";
import { StudiosSection } from "../../components/studios-section/studios-section";
import { StyleSection } from "../../components/style-section/style-section";
import { TrendsSection } from "../../components/trends-section/trends-section";
export const MainPage = () => {
  return (
    <>
      <Header isMain={true} />

      <HeroSection />

      <StyleSection />

      <TrendsSection />

      <JoinSection />

      <StudiosSection />

      <MaterialsSection />

      <Footer></Footer>
    </>
  );
};
