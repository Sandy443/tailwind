// MenuSidebar.tsx
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

const MenuSidebar = ({ items, position = "left" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderMenuItems = () =>
    items.map((item) => (
      <li key={item.id} className="py-2 px-4 hover:bg-gray-200">
        {item.label}
      </li>
    ));

  return (
    <>
      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        {isOpen ? <IoMdClose /> : <span>Menu</span>}
      </button>

      <Transition
        show={isOpen}
        enter="transition-transform duration-300"
        enterFrom={position === "left" ? "-translate-x-full" : "translate-x-full"}
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo={position === "left" ? "-translate-x-full" : "translate-x-full"}
      >
        <div className={`fixed ${position}-0 top-0 w-64 h-full bg-white shadow-lg z-50`}>
          <button onClick={toggleMenu} className="p-4">
            <IoMdClose color="textColor" />
          </button>
          <ul>{renderMenuItems()}</ul>
        </div>
      </Transition>
    </>
  );
};

export default MenuSidebar;
