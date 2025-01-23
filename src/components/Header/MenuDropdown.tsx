// MenuDropdown.tsx
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

const MenuDropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderMenuItems = () =>
    headerNav.map((item) => (
      <li key={item.id} className="my-sm px-4 hover:text-accent">
        <a href={item.url}>{item.name}</a>
      </li>
    ));

  return (
    <>
      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        {isOpen ? <IoMdClose /> : <span>Menu</span>}
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
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-48 z-50">
          <ul>{renderMenuItems()}</ul>
        </div>
      </Transition>
    </>
  );
};

export default MenuDropdown;
