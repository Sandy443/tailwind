// src/components/Menu.tsx
import React from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  items: { id: string; name: string; url: string }[];
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ items, className = "" }) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id} className={`${className}`}>
          <Link to={item.url}>{item.name}</Link>
        </li>
      ))}
    </>
  );
};

export default Menu;
