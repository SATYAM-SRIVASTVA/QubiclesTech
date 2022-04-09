import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navbar/nav';
import Built from './Component/Built/built';
import Start from './Component/Start/Start.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Card from './Component/Card/Card.jsx'

function App() {
  return (
   <>
   <Nav/>
   <Built/>
   <Start/>
   <Card/>
   <Footer/>
   </>
  );
}

export default App;
