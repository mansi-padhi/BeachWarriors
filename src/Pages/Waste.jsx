import React, { useState, useRef } from 'react'

function Waste() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [dominantType, setDominantType] = useState('');
  
  const fileInputRef = useRef(null);
  
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        // Simulate AI processing delay
        setTimeout(() => {
          const result = {
            biodegradable: 65.3,
            nonBiodegradable: 28.7,
            organic: 6.0
          };
          
          setPredictionResult(result);
          setIsProcessing(false);
          
          // Determine dominant waste type
          const maxValue = Math.max(result.biodegradable, result.nonBiodegradable, result.organic);
          if (maxValue === result.biodegradable) {
            setDominantType('biodegradable');
          } else if (maxValue === result.nonBiodegradable) {
            setDominantType('nonBiodegradable');
          } else {
            setDominantType('organic');
          }
          
          // Show popup
          setShowPopup(true);
          
          // Auto hide popup after 5 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 5000);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  const getTypeColor = (type) => {
    switch(type) {
      case 'biodegradable': return 'bg-green-600';
      case 'nonBiodegradable': return 'bg-red-500';
      case 'organic': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };
  
  const getTypeIcon = (type) => {
    switch(type) {
      case 'biodegradable': return <i className="fas fa-recycle text-3xl"></i>;
      case 'nonBiodegradable': return <i className="fas fa-trash-alt text-3xl"></i>;
      case 'organic': return <i className="fas fa-apple-alt text-3xl"></i>;
      default: return <i className="fas fa-question text-3xl"></i>;
    }
  };
  
  const getTypeName = (type) => {
    switch(type) {
      case 'biodegradable': return 'Biodegradable';
      case 'nonBiodegradable': return 'Non-biodegradable';
      case 'organic': return 'Organic';
      default: return 'Unknown';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">AI-Powered Waste Segregation</h1>
        
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Upload an image of waste to classify it as biodegradable, non-biodegradable, or organic. 
            Our AI will analyze the image and provide instant results.
          </p>
          
          <button 
            onClick={handleButtonClick}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-medium transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <i className="fas fa-upload mr-2"></i> Upload Image
          </button>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </div>
        
        <div className="mb-8 relative">
          {selectedImage ? (
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img 
                  src={selectedImage} 
                  alt="Uploaded waste" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {isProcessing && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <div className="text-white text-center">
                    <i className="fas fa-spinner fa-spin text-3xl mb-2"></i>
                    <p>Analyzing image...</p>
                  </div>
                </div>
              )}
              
              {/* Classification Popup */}
              {showPopup && predictionResult && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-6 w-4/5 max-w-md z-10 transition-all duration-300 ease-in-out">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Classification Result</h3>
                    <button 
                      onClick={() => setShowPopup(false)}
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  
                  <div className={`${getTypeColor(dominantType)} text-white p-4 rounded-lg mb-4 flex items-center justify-center`}>
                    <div className="text-center">
                      {getTypeIcon(dominantType)}
                      <p className="text-xl font-bold mt-2">
                        {getTypeName(dominantType)}
                      </p>
                      <p className="text-sm mt-1">
                        {dominantType === 'biodegradable' && predictionResult.biodegradable.toFixed(1)}%
                        {dominantType === 'nonBiodegradable' && predictionResult.nonBiodegradable.toFixed(1)}%
                        {dominantType === 'organic' && predictionResult.organic.toFixed(1)}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-green-600 h-4 rounded-full" 
                          style={{ width: `${predictionResult.biodegradable}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 min-w-[100px] text-right">
                        Biodegradable: {predictionResult.biodegradable}%
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-red-500 h-4 rounded-full" 
                          style={{ width: `${predictionResult.nonBiodegradable}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 min-w-[100px] text-right">
                        Non-biodegradable: {predictionResult.nonBiodegradable}%
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-yellow-500 h-4 rounded-full" 
                          style={{ width: `${predictionResult.organic}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 min-w-[100px] text-right">
                        Organic: {predictionResult.organic}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              
              <p className="text-gray-500">Upload an image to see AI classification results</p>
            </div>
          )}
        </div>
        
        {predictionResult && !isProcessing && !showPopup && (
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-center mb-4">Classification Results</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-green-600 h-4 rounded-full" 
                    style={{ width: `${predictionResult.biodegradable}%` }}
                  ></div>
                </div>
                <span className="ml-3 min-w-[100px] text-right">
                  Biodegradable: {predictionResult.biodegradable}%
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-red-500 h-4 rounded-full" 
                    style={{ width: `${predictionResult.nonBiodegradable}%` }}
                  ></div>
                </div>
                <span className="ml-3 min-w-[100px] text-right">
                  Non-biodegradable: {predictionResult.nonBiodegradable}%
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-yellow-500 h-4 rounded-full" 
                    style={{ width: `${predictionResult.organic}%` }}
                  ></div>
                </div>
                <span className="ml-3 min-w-[100px] text-right">
                  Organic: {predictionResult.organic}%
                </span>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-3 gap-6">
          <div className={`text-center transition-all duration-300 ${dominantType === 'biodegradable' ? 'transform scale-105 shadow-lg rounded-lg' : ''}`}>
            <div className={`bg-green-100 p-4 rounded-lg mb-3 h-40 flex items-center justify-center transition-all duration-300 hover:bg-green-200 cursor-pointer ${dominantType === 'biodegradable' ? 'ring-4 ring-green-500' : ''}`}>
              <div className="relative">
                <i className="fas fa-recycle text-5xl text-green-600"></i>
                <div className="absolute -bottom-2 -right-2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs">
                  <i className="fas fa-leaf"></i>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-1">Biodegradable</h3>
            <p className="text-sm text-gray-600">Paper, food waste, leaves, etc.</p>
          </div>
          
          <div className={`text-center transition-all duration-300 ${dominantType === 'organic' ? 'transform scale-105 shadow-lg rounded-lg' : ''}`}>
            <div className={`bg-yellow-100 p-4 rounded-lg mb-3 h-40 flex items-center justify-center transition-all duration-300 hover:bg-yellow-200 cursor-pointer ${dominantType === 'organic' ? 'ring-4 ring-yellow-500' : ''}`}>
              <div className="relative">
                <i className="fas fa-apple-alt text-5xl text-yellow-600"></i>
                <div className="absolute -bottom-2 -right-2 bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs">
                  <i className="fas fa-seedling"></i>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-1">Organic</h3>
            <p className="text-sm text-gray-600">Fruit peels, vegetable scraps, etc.</p>
          </div>
          
          <div className={`text-center transition-all duration-300 ${dominantType === 'nonBiodegradable' ? 'transform scale-105 shadow-lg rounded-lg' : ''}`}>
            <div className={`bg-red-100 p-4 rounded-lg mb-3 h-40 flex items-center justify-center transition-all duration-300 hover:bg-red-200 cursor-pointer ${dominantType === 'nonBiodegradable' ? 'ring-4 ring-red-500' : ''}`}>
              <div className="relative">
                <i className="fas fa-trash-alt text-5xl text-red-600"></i>
                <div className="absolute -bottom-2 -right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-1">Non-biodegradable</h3>
            <p className="text-sm text-gray-600">Plastic, metal, glass, etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waste