import NavigationBar from "../../header/navigation/NavigationBar";
import HeroSection from "../../content/hero/HeroSection";
import CardNavigation from "../../content/CardSection/Navigation/CardNavigation";
import CardSection from "../../content/CardSection/card/CardSection";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <CardNavigation />
      <CardSection />
      <Footer />
    </>
  );
};

export default Home;
