import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/header/navigation/NavigationBar';
import HeroSection from './components/content/hero/HeroSection';
import CardNavigation from './components/content/CardSection/Navigation/CardNavigation';
import CardSection from './components/content/CardSection/card/CardSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <HeroSection/>
      <CardNavigation/>
      <CardSection/>
      <Footer/>
    </div>
  );
}

export default App;
