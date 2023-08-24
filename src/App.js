import './App.css';
import Navbar from './Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home, { Card } from './Home';


function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
