import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-900 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
