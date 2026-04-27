import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { StudiosSection } from "../../components/studios-section/studios-section";

export const StudiosPage = () => {
  return (
    <>
      <Header theme="dark" />

      <StudiosSection title="СТУДИИ" source="full" />

      <Footer />
    </>
  );
};
