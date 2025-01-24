import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { headerNav } from "../../config/navigation";
import { Link } from "react-router-dom";

export interface MenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MenuFullscreenProps {
  iconSize?: number;
}

const MenuFullscreen: React.FC<MenuFullscreenProps> = ({ 
  iconSize 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderMenuItems = () =>
    headerNav.map((item) => (
      <li key={item.id} className="my-sm px-4 hover:text-accent">
        <Link to={item.url}>{item.name}</Link>
      </li>
    ));

  return (
    <>
      <button onClick={toggleMenu} className={`focus:outline-none`}>
        {isOpen ? <IoMdClose size={iconSize} /> : <FaBars size={iconSize} />}
      </button>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-primary z-50 flex justify-center items-center sm:text-2xl">
          <div className="flex flex-col items-center">
            <ul className="text-center text-textColor">{renderMenuItems()}</ul>
            <button onClick={toggleMenu} className="mb-6 text-lg">
              <IoMdClose color="textColor" size={iconSize} />
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default MenuFullscreen;
