import React from 'react';
import Button from './Button';

const Home = () => {
  const fileID = "1gKwRppgqVM7nf7Z4hOIvyh-ibUP3O368";
  const resumeUrl = `https://drive.google.com/uc?id=${fileID}`;

  const handleDownloadResume = () => {
    window.open(resumeUrl, '_blank');
  };

  const handleContactMe = () => {
    window.location.href = 'mailto:balavardhan975@gmail.com';
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-vector/front-end-development-concept_107173-16647.jpg?w=826"
            alt="Front End Development"
            className="rounded-lg shadow-lg"
            style={{ maxWidth: '400px', maxHeight: '300px' }}
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-purple-700 hover:text-purple-600 transition-colors duration-300">
            Bala Vardhan Pula
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Front-end developer with expertise in creating responsive web applications using React and Redux.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Skilled in integrating front-end components with RESTful APIs and managing application state for seamless performance.
          </p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <Button
              text="Contact Me"
              onClick={handleContactMe}
              className="md:px-4 md:py-2 px-3 py-1 text-sm md:text-base"
            />
            <Button
              text="Download Resume"
              onClick={handleDownloadResume}
              className="md:px-4 md:py-2 px-3 py-1 text-sm md:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
