import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bg-violet-900/50 bottom-0 w-full py-2 flex justify-center items-center backdrop-blur-xs">
      Made with
      <span className="material-symbols-outlined heart-icon px-1">favorite</span>
      by
      <span className="px-1 font-bold">
        <span className="text-violet-900"> Moon</span>
        <span>-deity</span>
      </span>
    </footer>
  );
};

export default Footer;
