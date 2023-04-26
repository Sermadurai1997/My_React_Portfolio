import Topbar from "./components/topbar/Topbar" ;
import Intro from "./components/intro/Intro" ;
import Portfolio from "./components/portfolio/Portfolio" ;
import Testimonial from "./components/testimonial/Testimonial" ;
import Works from "./components/works/Works" ;
import Contact from "./components/contact/Contact" ;


function App() {
  return (
    <div className="app"> {/*whole container*/}
      <Topbar/>
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
