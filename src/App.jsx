import Topbar from "./components/topbar/Topbar" ;
import Intro from "./components/intro/Intro" ;
import Portfolio from "./components/portfolio/Portfolio" ;
import Testimonial from "./components/testimonial/Testimonial" ;
import Works from "./components/works/Works" ;
import Contact from "./components/contact/Contact" ;
import Menu from "./components/menu/Menu" ;
import "./app.scss" ;
import {useState} from "react" ;


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app"> {/*whole container*/}
      <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
