import React, { useRef } from 'react';
import Gallery from '../components/Gallery';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';

const Collection: React.FC = () => {
    const { collection } = useParams<{ collection: string }>();
    
    const footerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Helmet>
              <title>Claire Benett - Collections</title>
            </Helmet>
            <Header />
            <Gallery collection={collection || ''} footerRef={footerRef} />
            <Footer ref={footerRef} />
        </>
    );
};

export default Collection;
