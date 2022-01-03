import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import Contact from './Views/Contact';
import waves from './geometric-glitch-waves.jpg';

// Use Link for Linking to pages, Switch to change content and Route to route to the content on pages

function App() {
  return (
    <div style={{  
      backgroundImage: `url(${waves})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }} className="relative pb-10 min-h-screen"> 
    {/* Above css well positions the Footer */}
        <Router>
        <Header/>
        <div className="p-1">
          <Routes>
              <Route exact path='/' 
              element={ <Home/> }>           
              </Route>
              <Route path='/about' 
              element={ <About/> }>    
              </Route>
              <Route path='/products/:id'
              element={ <Product/> }>
              </Route>
              <Route path='/contact'
              element={ <Contact/> }> 
              </Route>
          </Routes>
        </div>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;