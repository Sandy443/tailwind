import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Privacy = () => {
    
    return (
        <>
            <Helmet>
              <title>Claire Benett - Privacy</title>
            </Helmet>
            <Header />
            <h2>privacy</h2>
            <div className='h-[44dvh] max-w-screen-2xl px-1 sm:px-16 md:px-32 lg:px-48 relative 2xl:px-64 mx-auto text-center'>
                <p>This is a fictional protfolio website.</p>
                <p>
                    Credits for all images used in this project go to <a className="underline" target="_blank" href="https://www.pexels.com">Pexels</a>
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Privacy;