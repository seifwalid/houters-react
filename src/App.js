import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Section_1 from "./components/section-1/section-1.component";
const App = () => {
  return (
    <div className="App">
      
      <Navbar />
      <div className="container">
      
      <Section_1>

      </Section_1>
  
      </div>

      <Footer/>
    </div>
  );
};

export default App;
