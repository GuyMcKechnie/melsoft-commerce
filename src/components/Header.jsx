import { Heart } from 'lucide-react';
import React from 'react';


export default function Header({ 
  label = "Search Products", 
  placeholder = "Search what you want here...",
  onFavoriteClick,
  isFavorite = false,
  onChange,
  value
}) {
  return (
    
    <div className="w-full bg-gray-100 py-6 px-8 flex justify-center shadow-md rounded-b-xl">
      <div className="relative w-full max-w-[400px]"> 
        
      
        <div className="mb-2 px-1 text-sm font-semibold text-[#60695C]">
          {label}
        </div>
        
       
        <div className="relative bg-white rounded-[13px] shadow-[0_4px_16px_rgba(26,31,22,0.15)] h-14 flex items-center px-4">
          
        
          <button
            onClick={onFavoriteClick}
            className="mr-3 transition-colors hover:opacity-80"
            aria-label="Toggle favorite"
          >
            <Heart
              className="w-5 h-5"
              fill={isFavorite ? "red" : "none"} 
              stroke={isFavorite ? "red" : "rgba(26, 31, 22, 0.5)"}
            />
          </button>

          {/* Input Field */}
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex-1 bg-transparent border-none outline-none text-[#1A1F16] placeholder:text-[#1A1F16]/50"
          />
        </div>
      </div>
    </div>
  );
}