import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-yellow-300">
      <Header />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-black mb-8 transform -rotate-1 bg-pink-400 border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              HELLO WORLD!
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-black bg-cyan-300 border-4 border-black p-4 inline-block transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Welcome to the Brutal Zone
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-red-400 border-6 border-black p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black text-black mb-4">BRUTAL DESIGN</h3>
              <p className="text-black font-bold">Raw, unfiltered aesthetics that punch you in the face</p>
            </div>
            
            <div className="bg-green-400 border-6 border-black p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black text-black mb-4">LOUD COLORS</h3>
              <p className="text-black font-bold">Colors so bright they need sunglasses</p>
            </div>
            
            <div className="bg-purple-400 border-6 border-black p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black text-black mb-4">THICK BORDERS</h3>
              <p className="text-black font-bold">Borders thicker than your morning coffee</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-16">
            <button className="bg-orange-400 border-8 border-black px-12 py-6 text-3xl font-black text-black transform hover:scale-105 hover:-rotate-1 transition-all duration-200 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              CLICK ME NOW!
            </button>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-400 border-6 border-black p-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black text-black mb-4 bg-white border-4 border-black p-2 inline-block">
                WHAT IS THIS?
              </h4>
              <p className="text-black font-bold text-lg leading-tight">
                This is Neo-Brutalism in action! Bold, unapologetic, and in-your-face design that breaks all the rules.
              </p>
            </div>
            
            <div className="bg-yellow-400 border-6 border-black p-8 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black text-black mb-4 bg-white border-4 border-black p-2 inline-block">
                WHY BRUTAL?
              </h4>
              <p className="text-black font-bold text-lg leading-tight">
                Because subtle is overrated! We believe in design that screams, not whispers.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t-8 border-white p-8 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-white font-black text-xl bg-red-500 border-4 border-white p-4 inline-block transform -rotate-1">
            BRUTALLY YOURS © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;