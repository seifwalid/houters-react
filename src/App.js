import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import Section1 from "./components/Section1/Section1.component";
import Footer from "./components/Footer/Footer.component";
import PropertySection from "./components/PropertySection/PropertySection";
import ArticleSection from "./components/ArticleSection/ArticleSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Section1 />
      <PropertySection />
      <ArticleSection />
      <ContactUsSection />

      <Footer />
    </div>
  );
};

export default App;
