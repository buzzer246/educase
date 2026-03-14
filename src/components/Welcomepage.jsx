import React from 'react';

const WelcomePage = () => {

  const register = () => {
    console.log('Register button clicked!,Site is under Maintance');
  }

  const login = () => {
    console.log('Login button clicked!,Site is under Maintance');
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-end p-6 pb-8">
      <div className="w-full max-w-sm mx-auto">
        {/* Header Section */}
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-3">
          Welcome to PopX
        </h1>

        <p className=" text-center text-gray-600 text-base mb-8">
          Lorem ipsum dolor sit amet,<br></br>
          consectetur adipiscing elit.
        </p>

        {/* Buttons Section */}
        <div className="space-y-4">
          {/* Create Account Button with Rainbow Hover */}
          <button className="group relative w-full py-3 px-4 bg-[#6c5ce7] text-white font-medium rounded-lg text-base overflow-hidden transition-all duration-300">
            {/* Rainbow overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600 animate-rainbow"></div>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <span className="relative z-10" onClick={register()}>Create Account</span>
          </button>

          {/* Login Button with Rainbow Hover */}
          <button className="group relative w-full py-3 px-4 bg-[#eae6f0] text-gray-900 font-medium rounded-lg text-base overflow-hidden transition-all duration-300">
            {/* Rainbow overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600 animate-rainbow"></div>
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
            <span className="relative z-10" onClick={login()}>Already Registered? Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
