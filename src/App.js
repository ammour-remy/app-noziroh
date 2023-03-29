import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Routing from './router';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routing/>
    </BrowserRouter>
  );
}

export default App;
