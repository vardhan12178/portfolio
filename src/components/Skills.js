import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { FaDatabase, FaPython } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-700 hover:text-purple-600 transition-colors duration-300 text-center">
        Skills
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Primary Skills</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <DiHtml5 className="text-4xl text-purple-700" />
              <span className="ml-2 text-gray-700">HTML5</span>
            </div>
            <div className="flex items-center">
              <DiCss3 className="text-4xl text-purple-700" />
              <span className="ml-2 text-gray-700">CSS3</span>
            </div>
            <div className="flex items-center">
              <DiJavascript1 className="text-4xl text-purple-700" />
              <span className="ml-2 text-gray-700">JavaScript</span>
            </div>
            <div className="flex items-center">
              <DiReact className="text-4xl text-purple-700" />
              <span className="ml-2 text-gray-700">React</span>
            </div>
            <div className="flex items-center">
              <FaDatabase className="text-4xl text-purple-700" />
              <span className="ml-2 text-gray-700">Redux</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Secondary Skills</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <DiNodejsSmall className="text-4xl text-purple-700" />
              <span className="ml-2 text-gray-700">Node.js</span>
            </div>
            <div className="flex items-center">
              <DiMongodb className="text-4xl text-purple-700" />
              <span className="ml-2 text-gray-700">MongoDB</span>
            </div>
            <div className="flex items-center">
              <FaDatabase className="text-4xl text-purple-700" />
              <span className="ml-2 text-gray-700">SQL</span>
            </div>
            <div className="flex items-center">
              <FaPython className="text-4xl text-purple-700" />
              <span className="ml-2 text-gray-700">Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
