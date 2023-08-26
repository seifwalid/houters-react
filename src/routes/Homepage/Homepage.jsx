import "./Hompage.styles.css";
import { FC } from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import Section1 from "../../components/Section1/Section1.component";
import PropertySection from "../../components/PropertySection/PropertySection.component";
import ArticleSection from "../../components/ArticleSection/ArticleSection.component";
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection.component";
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
