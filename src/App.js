import {
  
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Page/Home'
import About from './Page/About'
import Topbar from './components/Topbar'


function App() {
  return (
    <div className="App">
      <Topbar />

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
     
    </div>
  );
}

export default App;
