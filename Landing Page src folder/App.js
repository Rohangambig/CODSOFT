import './App.css';
import Navigation from './component/Navigation';
import Home from './component/Home.js'
import About from './component/About.js';
import Contact from './component/Contact.js'
function App() {
  return (
    <div className="App">
    <Navigation></Navigation>
    <Home></Home>
    <About></About>
    <Contact></Contact>
    </div>
  );
}

export default App;
