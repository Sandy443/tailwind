import React from "react";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "../components/UI/Image";
import { Link } from "react-router-dom";
import { collections } from "../config/collections";
import { Helmet } from "react-helmet";

const GridPart: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => {
  return <div className={`overflow-hidden ${className}`}>{children}</div>;
};
const HeaderPart: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`row-start-1 row-end-2 col-start-1 col-end-7 flex flex-col px-4 
                    lg:row-end-4 lg:col-start-3 lg:col-end-11 ${className}`}
    >
      {children}
    </div>
  );
};
const DescPart: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`row-start-2 row-end-3 col-start-1 col-end-7 z-10 px-4 text-md md:text-lg lg:text-xl
                    lg:row-end-4 lg:col-start-3 lg:col-end-11 ${className}`}
    >
      {children}
    </div>
  );
};

const Project: React.FC<React.PropsWithChildren<{ bg?: string }>> = ({
  bg,
  children,
}) => {
  return (
    <div className={`${bg}`}>
      <div
        className={`grid grid-cols-6 grid-rows-galleryMobile gap-4 lg:grid-cols-12 lg:grid-rows-12 
                      h-[90dvh] sm:h-[75dvh] md:max-w-screen-sm xl:h-[100dvh] pb-4 pt-8 sm:px-20 md:px-0 lg:max-w-screen-lg mx-auto
                      overflow-x-hidden `}
      >
        {children}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  console.log("Projects component rendered");

  const imageCom = "object-cover border-white border-4";
  const linkStyles =
    "underline lg:text-2xl row-start-3 row-end-4 col-start-1 col-end-7 px-4 lg:row-start-4 lg:row-end-5 lg:col-start-3 lg:col-end-11";

  return (
    <>
      <Helmet>
        <title>Claire Benett - Projects</title>
      </Helmet>

      <Header />
      <h2>my Projects</h2>
      <div>
        <Project bg="bg-gray-200">
          <HeaderPart>
            <h4>{collections[0].name}</h4>
          </HeaderPart>
          <DescPart>
            <div className="mb-4">
              A captivating collection exploring the beauty of monochrome
              photography. Each image highlights the elegance and depth found in
              shades of grey, telling stories of contrast and emotion.
            </div>
          </DescPart>
          <Link
            to={`/projects/${collections[0].url}`}
            className={`${linkStyles}`}
          >
            view collection
          </Link>
          <GridPart
            className="row-start-4 row-end-6 col-start-1 col-end-4 flex z-10
                               lg:row-start-6 lg:row-end-12 "
          >
            <Image id={8} className={`${imageCom} w-full h-full`} />
          </GridPart>
          <GridPart
            className="row-start-5 row-end-7 col-start-3 col-end-7 flex justify-end
                               lg:row-start-7 lg:row-end-11 lg:z-10"
          >
            <Image
              id={26}
              className={`${imageCom} w-full h-full self-end lg:w-[90%]`}
            />
          </GridPart>
          <GridPart
            className="hidden lg:flex 
                               lg:row-start-5 lg:row-end-10 lg:col-start-6 lg:col-end-10 lg:z-10"
          >
            <Image id={12} className={`${imageCom} w-full h-full `} />
          </GridPart>
          <GridPart
            className="hidden lg:flex 
                               lg:row-start-8 lg:row-end-12 lg:col-start-9 lg:col-end-13 lg:z-10"
          >
            <Image id={33} className={`${imageCom} w-full h-full `} />
          </GridPart>
        </Project>

        <Project bg="bg-blue-200 bg-opacity-75">
          <HeaderPart>
            <h4>{collections[2].name}</h4>
          </HeaderPart>
          <DescPart>
            <div className="mb-4">
              Journey into Antarctica’s breathtaking landscapes with stunning
              photography of ice formations and frozen vistas. Experience the
              raw beauty and serene stillness of this untouched paradise.
            </div>
          </DescPart>
          <Link
            to={`/projects/${collections[2].url}`}
            className={`${linkStyles}`}
          >
            view collection
          </Link>
          <GridPart
            className="row-start-4 row-end-7 col-start-1 col-end-5 flex
                               lg:row-start-5 lg:row-end-9 "
          >
            <Image
              id={17}
              className={`${imageCom} h-[85%] w-full self-center lg:h-full`}
            />
          </GridPart>
          <GridPart
            className="row-start-4 row-end-7 col-start-4 col-end-7 z-10 flex
                               lg:row-start-8 lg:row-end-13 lg:col-start-3 lg:col-end-8 "
          >
            <Image
              id={18}
              className={`${imageCom} h-[75%] w-full self-center lg:h-full`}
            />
          </GridPart>
          <GridPart
            className="hidden lg:flex 
                               lg:row-start-6 lg:row-end-10 lg:col-start-6 lg:col-end-10 lg:z-10"
          >
            <Image id={35} className={`${imageCom} w-full h-full `} />
          </GridPart>
          <GridPart
            className="hidden lg:flex 
                               lg:row-start-5 lg:row-end-12 lg:col-start-9 lg:col-end-13"
          >
            <Image id={44} className={`${imageCom} w-full h-full `} />
          </GridPart>
        </Project>

        <Project bg="bg-orange-200 bg-opacity-75">
          <HeaderPart>
            <h4>{collections[3].name}</h4>
          </HeaderPart>
          <DescPart>
            <div className="mb-4">
              Discover cozy urban hideaways through this collection of serene
              escapes in bustling cities. Each image showcases unique
              architecture that invites tranquility amid urban chaos.
            </div>
          </DescPart>
          <Link
            to={`/projects/${collections[3].url}`}
            className={`${linkStyles}`}
          >
            view collection
          </Link>
          <GridPart
            className="row-start-5 row-end-7 col-start-1 col-end-5 flex
                               lg:row-start-7 lg:row-end-13 "
          >
            <Image
              id={19}
              className={`${imageCom} h-[85%] w-full self-center lg:h-full`}
            />
          </GridPart>
          <GridPart
            className="row-start-4 row-end-6 col-start-3 col-end-7 z-10 flex justify-end items-start
                               lg:row-start-5 lg:row-end-10 lg:col-start-4 lg:col-end-9 lg:z-20"
          >
            <Image
              id={36}
              className={`${imageCom} h-[90%] w-[80%] lg:w-full`}
            />
          </GridPart>
          <GridPart
            className="hidden lg:flex 
                               lg:row-start-8 lg:row-end-13 lg:col-start-6 lg:col-end-10 z-10"
          >
            <Image id={40} className={`${imageCom} w-full h-[90%] self-top`} />
          </GridPart>
          <GridPart
            className="hidden lg:flex 
                               lg:row-start-6 lg:row-end-11 lg:col-start-9 lg:col-end-13 z-0"
          >
            <Image id={28} className={`${imageCom} w-full h-full `} />
          </GridPart>
        </Project>

        <Project bg="bg-white">
          <HeaderPart>
            <h4>{collections[1].name}</h4>
          </HeaderPart>
          <DescPart>
            <div className="mb-4">
              Celebrate love with this wedding collection featuring Amy and
              Jackson. Each photograph captures heartfelt moments and joyful
              celebrations, creating a timeless tribute to their special day.
            </div>
          </DescPart>
          <Link
            to={`/projects/${collections[1].url}`}
            className={`${linkStyles}`}
          >
            view collection
          </Link>
          <GridPart
            className="row-start-4 row-end-7 col-start-1 col-end-4 flex
                               lg:row-start-6 lg:row-end-11 lg:col-end-5 "
          >
            <Image
              id={15}
              className={`${imageCom} h-[75%] w-full self-center lg:h-full`}
            />
          </GridPart>
          <GridPart
            className="row-start-4 row-end-7 col-start-3 col-end-7 z-10 flex justify-end
                               lg:row-start-5 lg:row-end-13 lg:col-start-4 lg:col-end-9 "
          >
            <Image
              id={20}
              className={`${imageCom} h-full w-[90%] self-center`}
            />
          </GridPart>
          <GridPart
            className="hidden lg:flex 
                               lg:row-start-4 lg:row-end-8 lg:col-start-8 lg:col-end-11 lg:z-10"
          >
            <Image id={25} className={`${imageCom} w-full h-full `} />
          </GridPart>
          <GridPart
            className="hidden lg:flex 
                               lg:row-start-7 lg:row-end-12 lg:col-start-9 lg:col-end-13"
          >
            <Image id={41} className={`${imageCom} w-full h-full `} />
          </GridPart>
        </Project>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
