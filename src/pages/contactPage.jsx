import NavBar from "../layout/navBar";
import Footer from "../layout/footer";
import ContactPageHeader from "../layout/contactPageHeader";
import ContactPageCard from "../components/contactPageCard";
import CtaSectionContact from "../layout/ctaSectionContact";

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <ContactPageHeader />
      <ContactPageCard />
      <CtaSectionContact />
      <Footer />
    </div>
  );
};

export default ContactPage;
