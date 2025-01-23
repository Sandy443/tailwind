import React from 'react';
import { Header } from '../components/Header/Header';
import ContactForm from '../components/Form/ContactForm';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
  return (
    <>
    <Helmet>
      <title>Claire Benett - Contact</title>
    </Helmet>
        <Header />
        <h2>Contact</h2>
        <ContactForm />
        <Footer />
    </>
  );
};

export default Contact;
