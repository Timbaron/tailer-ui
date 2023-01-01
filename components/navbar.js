import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full h-16 bg-black">
      <div className="flex justify-between items-center h-full px-4">
        {/* logo and text next to each other */}
        <div className="flex items-center space-x-2">
          <div className="w-14 h-14 rounded-full">
            <Image src="/images/logo.png" alt="Logo" width={40} height={50} />
          </div>
          <div className="text-white font-bold text-2xl">Tailer UI</div>
        </div>        
        <div className="flex space-x-4">
          <div className="text-white font-bold text-lg hover:text-blue-400">Get Started</div>
          <div className="text-white font-bold text-lg hover:text-blue-400">Documentation</div>
          <div className="text-white font-bold text-lg hover:text-blue-400">GitHub</div>
        </div>
      </div>
    </div>
  );
};
