import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from './Views/Home';
import About from './Views/About';
import Products from './Views/Products';
import Contact from './Views/Contact';

// Use Link for Linking to pages, Switch to change content and Route to route to the content on pages

function App() {
  return (
    <div>
        <Router>
        <Header/>
        <div className="p-3">
          <Routes>
              <Route path='/' 
              element={ <Home/> }>           
              </Route>
              <Route path='/about' 
              element={ <About/> }>    
              </Route>
              <Route path='/products'
              element={ <Products/> }>
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