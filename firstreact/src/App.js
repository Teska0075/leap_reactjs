import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/header/navigation/NavigationBar';
import HeroSection from './components/content/hero/HeroSection';
import CardNavigation from './components/content/CardSection/Navigation/CardNavigation';
import CardSection from './components/content/CardSection/card/CardSection';
import Footer from './components/footer/Footer';

function App() {
  const users = [
  {name: ' Boldo', age: 33, imageURL: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'}, 
  {name: ' Bataa', age: 28, imageURL: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80'}, 
  {name: ' Naraa', age: 34, imageURL: 'https://images.unsplash.com/photo-1505866535066-ccebd6b2b98a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80'},
  {name: ' Saraa', age: 24, imageURL: 'https://images.unsplash.com/photo-1534119768988-c496213eff76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'},
  {name: ' Bulgaa', age: 20, imageURL: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'}
  ];

  let sum = 0;
  for(let i = 0; i < users.length; i++){
    sum += users[i].age
  }

  let ave = sum/users.length;
  
  

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
