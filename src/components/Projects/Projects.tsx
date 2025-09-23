import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "StoryQuest AAC Application",
      subtitle: "Full-Stack Accessibility Application",
      description:
        "A comprehensive web application designed to support individuals with communication challenges. Features an intuitive interface for creating and sharing communication boards with multimedia support.",
      longDescription: [
        "Developed using modern React and TypeScript for a responsive, accessible user experience",
        "Built robust Node.js backend services with RESTful API architecture",
        "Integrated database solutions for storing user profiles and communication boards",
        "Implemented Agile development practices with sprint planning and continuous integration",
        "Focused on accessibility compliance and inclusive design principles",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "RESTful APIs",
        "Database Integration",
        "Agile/Scrum",
      ],
      features: [
        "User authentication and profile management",
        "Dynamic communication board creation",
        "Multimedia content support",
        "Responsive design for multiple devices",
        "Real-time collaboration features",
      ],
      github: "https://github.com/nathaliavalli/story-Quest",
      liveDemo: "#", // Update with actual demo link
      image: "/storyQuestPic.png", // Add project image
      category: "Full-Stack Web Application",
      timeline: "Spring 2025",
    },
    {
      title: "Spaceify Web Application",
      subtitle: "Scalable System Architecture & API Integration",
      description:
        "A sophisticated web application focusing on performance optimization and scalable architecture. Demonstrates advanced system design patterns and comprehensive testing strategies.",
      longDescription: [
        "Architected scalable full-stack solution with emphasis on performance and maintainability",
        "Developed comprehensive RESTful API endpoints with robust authentication systems",
        "Implemented advanced error handling and data validation throughout the application",
        "Applied software engineering design patterns for modular, maintainable code",
        "Created extensive testing suite including unit and integration testing",
      ],
      techStack: [
        "JavaScript",
        "Node.js",
        "RESTful APIs",
        "System Architecture",
        "Testing Frameworks",
      ],
      features: [
        "Advanced authentication and authorization",
        "Comprehensive error handling",
        "Performance optimization techniques",
        "Modular system architecture",
        "Extensive test coverage",
      ],
      github: "https://github.com/nathaliavalli/Spaceify_",
      liveDemo: "#", // Update with actual demo link
      image: "/spaceify.png", 
      category: "System Architecture",
      timeline: "Fall 2024",
    },
    {
      title: "Custom Unix Shell",
      subtitle: "Systems Programming in C",
      description:
        "A fully functional command-line shell built from scratch in C, implementing core Unix shell functionality with advanced process management and signal handling capabilities.",
      longDescription: [
        "Developed complete shell implementation using low-level C programming",
        "Implemented advanced process management including forking and inter-process communication",
        "Built robust command parsing system supporting complex command structures",
        "Integrated comprehensive signal handling for process control",
        "Applied memory management best practices and system call interfaces",
      ],
      techStack: [
        "C Programming",
        "Linux/Unix",
        "System Calls",
        "Process Management",
        "IPC",
      ],
      features: [
        "Command parsing and execution",
        "Process creation and management",
        "Signal handling and job control",
        "Inter-process communication",
        "Memory management optimization",
      ],
      github: "https://github.com/nathaliavalli/ShellProject",
      image: "/shell.png", // Add project image
      category: "Systems Programming",
      timeline: "Spring 2024",
    },
    {
      title: "Mathematical Modeling Portfolio",
      subtitle: "Data Analysis & Algorithm Development",
      description:
        "A comprehensive collection of mathematical modeling projects demonstrating algorithmic problem-solving and data analysis capabilities using Python and MATLAB.",
      longDescription: [
        "Developed data-driven solutions for complex computational problems",
        "Implemented efficient algorithms for traffic flow optimization and pattern recognition",
        "Applied statistical analysis techniques to real-world datasets",
        "Created comprehensive documentation and visualization of results",
        "Utilized collaborative development practices with version control",
      ],
      techStack: [
        "Python",
        "MATLAB",
        "Algorithm Design",
        "Statistical Analysis",
        "Data Visualization",
      ],
      features: [
        "Traffic flow optimization algorithms",
        "Pattern recognition systems",
        "Statistical data analysis",
        "Mathematical model validation",
        "Comprehensive result visualization",
      ],
      github: "https://github.com/nathaliavalli/matlab",
      documentation:
        "https://github.com/nathaliavalli/matlab/blob/main/README.md",
      image: "/matlab.png", // Add project image
      category: "Mathematical Modeling",
      timeline: "Spring 2024",
    },
  ];

  const categories = [
    "All",
    "Full-Stack Web Application",
    "System Architecture",
    "Systems Programming",
    "Mathematical Modeling",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating full-stack
            development, systems programming, and mathematical problem-solving
            capabilities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-4xl mb-2">💻</div>
                    <div className="text-gray-600 font-medium">
                      {project.category}
                    </div>
                  </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {project.timeline}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-gray-800 transition-colors text-sm"
                  >
                    View Code
                  </a>
                  {project.liveDemo && project.liveDemo !== "#" && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.documentation && (
                    <a
                      href={project.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors text-sm"
                    >
                      Docs
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              More Projects Available
            </h3>
            <p className="text-gray-600 mb-6">
              Explore additional projects, coursework, and experiments in my
              GitHub repositories.
            </p>
            <a
              href="https://github.com/nathaliavalli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <span className="mr-2">📂</span>
              View All Repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
