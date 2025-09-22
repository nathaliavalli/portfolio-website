import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-blue-600">Nathalia Valli</span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-600 mt-2">
                  Software Engineer & Problem Solver
                </h2>
              </div>

              {/* Introduction paragraph */}
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  I'm a Mathematics and Computer Science graduate from Temple University with a 
                  passion for developing innovative software solutions that solve real-world problems. 
                  With experience in full-stack development, mathematical modeling, and systems programming, 
                  I bring both analytical thinking and practical coding skills to every project.
                </p>
                
                <p>
                  From building accessible web applications to developing custom Unix shells, 
                  I thrive on challenges that require creative problem-solving and technical excellence. 
                  I'm particularly interested in opportunities where I can contribute to mission-critical 
                  software that makes a meaningful impact.
                </p>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Temple University Graduate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Full-Stack Developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Security Clearance Eligible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Agile Development</span>
                </div>
              </div>

              {/* Call-to-action buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
                >
                  View My Projects
                </a>
                <a
                  href="#contact"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf" // You'll add this file later
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl transform rotate-3"></div>
              
              {/* Photo container */}
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img
                  src="/profile-photo.jpg" // You'll add this image to your public folder
                  alt="Nathalia Valli"
                  className="w-80 h-80 object-cover rounded-xl"
                />
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;