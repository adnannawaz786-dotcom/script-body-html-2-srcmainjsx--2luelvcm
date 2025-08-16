import React from 'react';
import { cn } from '../lib/utils';

const Header = ({ className, ...props }) => {
  return (
    <header 
      className={cn(
        "w-full bg-black text-white border-8 border-black shadow-[8px_8px_0px_0px_#ff0000] relative",
        "before:absolute before:top-0 before:left-0 before:w-full before:h-full",
        "before:bg-gradient-to-r before:from-yellow-400 before:to-red-500 before:-z-10",
        "before:transform before:translate-x-2 before:translate-y-2",
        className
      )}
      {...props}
    >
      <div className="relative z-10 bg-black px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white border-4 border-black transform rotate-45 shadow-[4px_4px_0px_0px_#ff0000]">
              <div className="w-full h-full bg-yellow-400 transform -rotate-45 flex items-center justify-center">
                <span className="text-black font-black text-xl">H</span>
              </div>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-wider text-white">
              HELLO WORLD
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <a 
              href="#home" 
              className="px-6 py-3 bg-white text-black font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_#ff0000] hover:shadow-[2px_2px_0px_0px_#ff0000] hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
            >
              HOME
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 bg-yellow-400 text-black font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_#00ff00] hover:shadow-[2px_2px_0px_0px_#00ff00] hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
            >
              ABOUT
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-red-500 text-white font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_#0000ff] hover:shadow-[2px_2px_0px_0px_#0000ff] hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
            >
              CONTACT
            </a>
          </nav>

          <div className="md:hidden">
            <button className="w-12 h-12 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#ff0000] hover:shadow-[2px_2px_0px_0px_#ff0000] hover:translate-x-1 hover:translate-y-1 transition-all duration-100 flex flex-col items-center justify-center space-y-1">
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500 border-4 border-black transform translate-x-2 -translate-y-2"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 bg-green-400 border-4 border-black transform -translate-x-2 translate-y-2"></div>
    </header>
  );
};

export default Header;