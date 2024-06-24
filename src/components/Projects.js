import React from 'react';
import projects from './projectsData';

const Projects = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800 hover:text-indigo-600 transition-colors duration-300 text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-4">
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="px-6 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-400 transition-colors duration-300 font-semibold"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-400 transition-colors duration-300 font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
        <div
          className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center
          hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">More Projects Coming Soon!</h2>
            <p className="text-gray-700">
              Stay tuned for updates as I continue to work on new projects.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/vardhan12178?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-800 hover:underline"
        >
          View More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
