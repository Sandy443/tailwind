import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Button } from "../components/UI/Button";
import Image from "../components/UI/Image";
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <>
    <Helmet>
      <title>Claire Benett</title>
      <meta name="description" content="Welcome to the homepage of my React App." />
    </Helmet>
      <div className="h-[100dvh] grid grid-cols-1 lg:grid-cols-2 grid-rows-[1fr, auto, 1fr] lg:grid-rows-[1fr, 1fr]">
        <div className="relative overflow-hidden h-[40dvh] lg:h-[80dvh] lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2 lg:order-2">
          <Image
            id={1}
            className="w-1/2 md:w-5/12 absolute -top-24 left-5 lg:h-[55%] lg:w-auto lg:top-5 lg:right-8 lg:left-auto"
          />
          <Image
            id={11}
            className="w-[56%] absolute top-12 right-2 lg:h-[70%] lg:w-auto lg:-bottom-2 lg:top-auto lg:right-52"
          />
        </div>
        <div className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:order-1">
          <Header className="h-[20dvh] lg:h-[10dvh] lg:mb-lg border-hidden lg:border-solid" />
        </div>
        <div className="hidden lg:flex justify-center items-center col-span-2 row-span-1 order-3 z-10">
          <h2 className="text-[86px] ml-2 -mt-96">
            <span className="text-primary">p</span>hotograp
            <span className="text-primary">hy</span>
          </h2>
        </div>
        <div className="hidden lg:flex justify-center items-center col-span-2 row-span-1 order-3 z-10">
          <h2 className="text-[86px] ml-[15rem] -mt-48">
            videogr<span className="text-primary">aphy</span>
          </h2>
        </div>
        <div className="relative overflow-hidden h-[40dvh] lg:h-[80dvh] lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:order-2">
          <Image
            id={4}
            className="w-[44%] absolute top-0 left-2 lg:h-[50%] lg:w-auto lg:top-0 lg:left-2 lg:right-auto lg:z-10"
          />
          <Image
            id={21}
            className="w-[48%] absolute top-12 right-0 lg:w-auto lg:h-[75%] lg:bottom-6 lg:top-auto lg:right-auto lg:left-44"
          />
        </div>
      </div>
      <div className="bg-secondary py-2 sm:mt-12 xl:mt-20">
        <div className="px-1 sm:w-3/4 md:w-1/2 mx-auto text-center my-lg text-lg md:text-2xl">
          <div className="md:text-4xl leading-normal font-semibold mb-4">
            Capture Your Moments Like Never Before!
          </div>
          <p>
            Book me for a photoshooot, wedding, or any other special event to turn
            your memories into beautiful pictures and videos!
          </p>
        </div>
      </div>
      <div className="bg-primary mb-md sm:py-12">
        <div className="lg:w-3/4 mx-auto flex flex-wrap sm:flex-nowrap lg:py-12 md:items-center">
          <div className="sm:w-2/5 h-[54dvh] sm:h-auto">
            <img
              className="h-[60dvh] sm:h-[40dvh] lg:h-auto object-cover object-bottom w-[100vw]"
              src="https://images.pexels.com/photos/2773570/pexels-photo-2773570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Claire Benett holding a camera"
            />
          </div>
          <div className="sm:w-3/4 md:px-16 px-4">
            <div className="md:text-4xl text-xl leading-normal font-semibold mb-4 sm:text-textColor text-primary">
              Hi, I'm Claire
            </div>
            <p>
              I’m a photographer and videographer with a passion for capturing
              the true essence of people. My style is empathetic and
              unobtrusive—I believe the best photos are authentic, natural, and
              full of life.
              <br /> <br />
              Building a personal connection matters most. I want to understand
              who you are and bring your visions to life in a way that feels
              true to you.
            </p>
            <Button className="mt-sm">Get In Touch</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
