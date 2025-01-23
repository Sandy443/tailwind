import React from "react";
import MenuFullscreen from "./MenuFullscreen";

export const Header: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <header className={`flex justify-between bg-secondary items-center px-4 text-textColor lg:justify-center border-b-textColor border-b-[1px] ${className}`}>
      <div className="flex items-center justify-between lg:justify-center relative w-full max-w-screen-2xl">
        <h1>Claire Bennett</h1>
        <div className="lg:absolute lg:right-0 lg:top-6 flex items-center">
          <MenuFullscreen iconSize={24} />
        </div>
      </div>
    </header>
  );
};
