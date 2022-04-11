import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navbar/nav';
import Built from './Component/Built/built';
import Start from './Component/Start/Start.jsx'
import { Services } from './Component/Services/Services';
import Footer from './Component/Footer/Footer'

function App() {
  return (
   <>
   <Nav/>
   <Built/>
   <Start/>
   <Services/>
   <Footer/>
   </>
  );
}

export default App;
