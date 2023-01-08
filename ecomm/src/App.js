import logo from './logo.svg';
import './App.scss';

import Header from './components/Header/Header';
import Navbar from './components/Header/Navigation/Navbar';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export default App;
