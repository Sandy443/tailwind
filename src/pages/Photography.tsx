import React, { useRef } from 'react';
import { Header } from '../components/Header/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';

const Photography: React.FC = () => {
    const footerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Helmet>
              <title>Claire Benett - Photography</title>
            </Helmet>
            <Header />
            <Gallery collection='' footerRef={footerRef} />
            <Footer ref={footerRef} />
        </>
    );
};

export default Photography;
