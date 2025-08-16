import React, { useState } from 'react'
import { cn } from './lib/utils'

function App() {
  const [isPaid, setIsPaid] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsPaid(true)
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-yellow-300 p-8 font-mono">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-black text-yellow-300 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h1 className="text-3xl font-black uppercase tracking-wide">
            Hello World
          </h1>
          <p className="text-lg font-bold mt-2">
            Neo Brutalist Payment
          </p>
        </div>

        {/* Payment Card */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 mb-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black uppercase mb-2">
              Single Payment
            </h2>
            <div className="text-4xl font-black text-black mb-4">
              $9.99
            </div>
            <p className="text-lg font-bold">
              One-time payment for premium access
            </p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-black uppercase text-lg mb-3 border-b-2 border-black pb-1">
              What you get:
            </h3>
            <ul className="space-y-2">
              {[
                'Premium Hello World Experience',
                'Neo Brutalist Design Access',
                'Lifetime Updates',
                '24/7 Support'
              ].map((feature, index) => (
                <li key={index} className="flex items-center font-bold">
                  <span className="w-4 h-4 bg-black mr-3 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Button */}
          {!isPaid ? (
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={cn(
                "w-full py-4 px-6 font-black uppercase text-lg transition-all duration-150",
                "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
                "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
                isProcessing 
                  ? "bg-gray-300 cursor-not-allowed" 
                  : "bg-red-400 hover:bg-red-500 cursor-pointer"
              )}
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
          ) : (
            <div className="text-center">
              <div className="bg-green-400 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
                <h3 className="font-black uppercase text-xl">
                  Payment Successful!
                </h3>
              </div>
              <p className="font-bold text-lg">
                Welcome to the premium experience! 🎉
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-bold">
              Powered by Neo Brutalism ⚡
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-4 right-4 w-8 h-8 bg-red-500 border-2 border-black transform rotate-45"></div>
        <div className="fixed bottom-4 left-4 w-12 h-12 bg-blue-500 border-2 border-black"></div>
        <div className="fixed top-1/2 left-4 w-6 h-6 bg-green-500 border-2 border-black rounded-full"></div>
      </div>
    </div>
  )
}

export default App