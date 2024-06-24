import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Food App",
      description: "A comprehensive food ordering application featuring an intuitive UI and seamless order tracking.",
      imgUrl: "https://i.imgur.com/s6nDRM2.jpeg",
      liveUrl: "https://vardhan-food.netlify.app/",
      githubUrl: "https://github.com/vardhan12178/Food-App",
    },
    {
      title: "Portfolio",
      description: "A personal portfolio showcasing my projects, skills, and professional background with a modern design.",
      imgUrl: "https://i.imgur.com/FWBxofE.jpeg",
      liveUrl: "https://vardhan-portfolio.netlify.app/",
      githubUrl: "https://github.com/vardhan12178/portfolio",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard application providing real-time weather updates and forecasts using a clean, responsive design.",
      imgUrl: "https://i.imgur.com/dBlkbNw.jpeg",
      liveUrl: "https://vardhan-weather.netlify.app/",
      githubUrl: "https://github.com/vardhan12178/weather",
    },
    {
      title: "Ecommerce Site",
      description: "An ecommerce website built using React, featuring product listings, search functionality, and a shopping cart.",
      imgUrl: "https://i.imgur.com/gCFlWIb.jpeg",
      liveUrl: "https://vkartshop.netlify.app/",
      githubUrl: "https://github.com/vardhan12178/Ecommerce",
    },
    {
      title: "Expenses App",
      description: "An application to track monthly expenses with detailed analytics.",
      imgUrl: "https://i.imgur.com/QbmI0Y7.jpeg",
      liveUrl: "https://vardhan-expense.netlify.app/",
      githubUrl: "https://github.com/vardhan12178/Expenses",
    },
    {
      title: "Taskmate",
      description: "A task management application for adding and tracking daily tasks.",
      imgUrl: "https://i.imgur.com/Nuv1CNN.jpeg",
      liveUrl: "https://vardhan-taskmate.netlify.app/",
      githubUrl: "https://github.com/vardhan12178/Taskmate",
    },
    {
      title: "Wikipedia Search",
      description: "A Wikipedia search application that allows users to search and read articles directly from Wikipedia with a user-friendly interface.",
      imgUrl: "https://i.imgur.com/OiXm0zm.jpeg",
      liveUrl: "https://vardhan-wikisearch.netlify.app/",
      githubUrl: "https://github.com/vardhan12178/wikisearch",
    },
  ];

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800 hover:text-indigo-600 transition-colors duration-300 text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-indigo-400 to-blue-500 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.imgUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-200 transition-colors duration-300 font-semibold"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-200 transition-colors duration-300 font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
        <div
          className="bg-gradient-to-r from-indigo-400 to-blue-500 rounded-lg shadow-lg p-6 flex items-center justify-center
          hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold text-white mb-2">More Projects Coming Soon!</h2>
            <p className="text-gray-200">
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
