import React from 'react';

const SplashScreen = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ease-in-out ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: fadeOut ? 'none' : 'auto' }}
    >
      <img
        src="/assets/images/logo.png"
        alt="PS/MS 007 Samuel Stern School Logo"
        className="h-32 w-auto sm:h-80 drop-shadow-lg"
      />
    </div>
  );
};

export default SplashScreen;
