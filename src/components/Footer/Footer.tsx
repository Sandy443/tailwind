import React from 'react';
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { footerNav } from '../../config/navigation';
import Menu from '../Menu';

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => (
  <footer ref={ref} className="bg-secondary pt-2"> {/* Attach ref here */}
    <div className="mx-auto w-full max-w-screen-xl p-4">
      <div className="md:flex md:justify-between">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="sm:flex sm:items-start sm:mt-4 sm:justify-between">
            <h1 className="leading-none">Claire Bennett</h1>
            <div className='mt-2 mb-sm'>
              Photographer/Videographer <br /> located in London
            </div>
            <ul className="flex flex-wrap sm:block gap-4 items-center text-sm font-medium text-textColor text-opacity-90 sm:mb-0">
              <Menu items={footerNav} className="mb-2 hover:text-accent-2" />
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center gap-2">
        <a href="http://www.instagram.com" target='_blank'>
          <FaInstagram className='fill-accent hover:fill-accent-2' size={28} />
          <span className="sr-only">Instagram page</span>
        </a>
        <a href="www.facebook.com">
          <FaFacebook className='fill-accent hover:fill-accent-2' size={28} />
          <span className="sr-only">Facebook page</span>
        </a>
        <a href="www.twitter.com">
          <FaTwitter className='fill-accent hover:fill-accent-2' size={28} />
          <span className="sr-only">Twitter page</span>
        </a>
        <a href="www.pinterest.com">
          <FaPinterest className='fill-accent hover:fill-accent-2' size={28} />
          <span className="sr-only">Pinterest page</span>
        </a>
      </div>
    </div>
    <hr className="border-textLight mx-auto my-1" />
    <div className="text-xs text-center text-textLight">
      © 2024 all rights reserved
    </div>
  </footer>
));

export default Footer;
