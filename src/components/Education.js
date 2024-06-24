import React from 'react';

const Education = () => {
  return (
    <div className="container mx-auto mt-2 p-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800 hover:text-indigo-600 transition-colors duration-300 text-center">
        Education
      </h1>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-500 p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">
            IRC, CCBP Tech 4.0 Intensive Program 
            <span className="text-indigo-200 ml-2">(Mar 2021 - Nov 2021)</span>
          </h2>
          <p className="text-indigo-200 mt-2">
            Full Stack Web Development. (CCBP 4.0 Intensive is an industry-ready certification program focused on full-stack development that provides training through an immersive hands-on and reverse-engineered curriculum)
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">
            Lakireddy Bali Reddy College of Engineering 
            <span className="text-indigo-200 ml-2">(June 2016 - Oct 2020)</span>
          </h2>
          <p className="text-indigo-200 mt-2">
            B.Tech in Electronics and Communication Engineering [7.76 CGPA]
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">
            Sri Chaitanya Junior College 
            <span className="text-indigo-200 ml-2">(June 2014 - Mar 2016)</span>
          </h2>
          <p className="text-indigo-200 mt-2">
            Intermediate (M.P.C) [78%]
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Vikas School 
            <span className="text-indigo-200 ml-2">(April 2014)</span>
          </h2>
          <p className="text-indigo-200 mt-2">
            S.S.C [9.5 GPA]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
