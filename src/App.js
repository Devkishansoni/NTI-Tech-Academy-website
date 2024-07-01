import "./App.css";
import AboutUs from "./Routes Com/About Us Com/AboutUs";
import Home from "./Routes Com/Home Com/Home";
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      
      {/* <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home/>} />
        
      </Routes> */}
      <AboutUs/>
      
      
    </>
  );
}

export default App;
