// EcoCoins.jsx
import React, { useState } from 'react';
import poha from "../assets/poha.png";
import tea from "../assets/tea.png";
import sandwich from "../assets/sandwich.png";
import mango from "../assets/mango.png";

function EcoCoins() {
  const [codeDigits, setCodeDigits] = useState(['', '', '', '']);
  const [activeInput, setActiveInput] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const transactions = [
    { date: '2025-06-22', type: 'Earned', amount: 50, details: 'Plastic recycling' },
    { date: '2025-06-20', type: 'Redeemed', amount: 30, details: 'Sandwich' },
    { date: '2025-06-18', type: 'Earned', amount: 25, details: 'Paper recycling' },
    { date: '2025-06-15', type: 'Redeemed', amount: 15, details: 'Tea' },
    { date: '2025-06-12', type: 'Earned', amount: 40, details: 'Glass recycling' },
  ];

  const foodItems = [
    { name: 'Tea', coins: 15, image: tea },
    { name: 'Poha', coins: 25, image: poha },
    { name: 'Sandwich', coins: 30, image: sandwich },
    { name: 'Fresh Juice', coins: 20, image: mango },
    {
      name: 'Fruit Bowl',
      coins: 35,
      image: 'https://readdy.ai/api/search-image?query=fruit%20bowl&width=300&height=200&seq=5',
    },
    {
      name: 'Salad',
      coins: 40,
      image: 'https://readdy.ai/api/search-image?query=green%20salad&width=300&height=200&seq=6',
    },
    {
      name: 'Smoothie',
      coins: 25,
      image: 'https://readdy.ai/api/search-image?query=smoothie&width=300&height=200&seq=7',
    },
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(foodItems.length / itemsPerSlide);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newDigits = [...codeDigits];
      newDigits[index] = value;
      setCodeDigits(newDigits);

      if (value && index < 3) {
        setActiveInput(index + 1);
        document.getElementById(`code-input-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !codeDigits[index] && index > 0) {
      setActiveInput(index - 1);
      document.getElementById(`code-input-${index - 1}`)?.focus();
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="h-7 bg-gray-50 text-gray-800 font-sans p-10">
      <div className="w-full mx-auto bg-white h-auto shadow-md">
        {/* Header */}
        <header className="  flex items-center p-10">
          <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm">
            
            <span className="ml-2 font-2xl">⬅️ Back</span>
          </button>
          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center text-amber-600 text-sm">
              
              <span className="font-2xl">245 eco coins 🪙</span>
            </div>
            
          </div>
        </header>

        <main className="p-3">
          {/* Code Entry */}
          <section className="mb-3 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold text-blue-700 ">Eco Coins</h2>
            <div className=" p-3 ">
              <p className="text-center text-black mb-2">Enter NGO provided code</p>
              <div className="flex justify-center gap-4 mb-6">
                {codeDigits.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-input-${index}`}
                    type="text"
                    maxLength={1}
                    className="w-14 h-14 border-2 border-orange-400 rounded-lg text-center text-2xl font-bold bg-white focus:outline-none focus:ring-2 focus:ring-green-200"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onFocus={() => setActiveInput(index)}
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium text-base">
                Verify Code
              </button>
            </div>
          </section>

          {/* Redeem Section */}
          <section className="mb-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-blue-700">Redeem Eco Coins</h2>
              <div className="flex space-x-3">
                <button onClick={prevSlide} className="w-10 h-30 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 border border-green-200">
                  <p className="text-sm">⬅️</p>
                </button>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 border border-green-200">
                  <p className="text-sm">➡️</p>
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-4 gap-4">
                      {foodItems.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
                          <div className="h-60 overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                          </div>
                          <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-medium text-base mb-1">{item.name}</h3>
                            <div className="flex items-center text-amber-600 mb-2 text-sm">
                              <i className="fas fa-coins mr-1"></i>
                              <span className="font-semibold">{item.coins} eco coins</span>
                            </div>
                            <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg font-medium text-sm">
                              Redeem Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-6 space-x-1">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Transaction History */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-6">Transaction History</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              {transactions.map((transaction, index) => (
                <div key={index} className={`p-4 flex items-center justify-between ${index !== transactions.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50`}>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${transaction.type === 'Earned' ? 'bg-green-100' : 'bg-amber-100'}`}>
                      <i className={`${transaction.type === 'Earned' ? 'fas fa-recycle text-green-600' : 'fas fa-shopping-bag text-amber-600'} text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                      <p className="text-sm font-medium">{transaction.details}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold text-sm ${transaction.type === 'Earned' ? 'text-green-600' : 'text-amber-600'}`}>
                      {transaction.type === 'Earned' ? '+' : '-'}{transaction.amount} coins
                    </p>
                    <p className="text-xs text-gray-500">{transaction.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default EcoCoins;
