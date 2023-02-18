import Actions from "../components/Actions";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      <main>
        <HeroSection />
        <Features />
        <Actions />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};
export default HomePage;
