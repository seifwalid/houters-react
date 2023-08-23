import "./Hompage.styles.css";
import { FC } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Section1 from "../../components/Section1/Section1.component";
import PropertySection from "../../components/PropertySection/PropertySection";
import ArticleSection from "../../components/ArticleSection/ArticleSection";
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Footer from "../../components/Footer/Footer.component";

const Homepage: FC = () => {
  return (
    <div className="homepage">
      <Navbar />

      <Section1 />
      <PropertySection />
      <ArticleSection />
      <ContactUsSection />

      <Footer />
    </div>
  );
};

export default Homepage;
