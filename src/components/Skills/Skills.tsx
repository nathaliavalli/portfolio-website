import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", level: "Intermediate" },
        { name: "JavaScript/TypeScript", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "C/C++", level: "Beginner" },
        { name: "MATLAB", level: "Advanced" }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "RESTful APIs", level: "Intermediate" },
        { name: "Responsive Design", level: "Advanced" }
      ]
    },
    {
      title: "Software Engineering",
      icon: "⚙️",
      skills: [
        { name: "Git/GitHub/GitLab", level: "Advanced" },
        { name: "Agile/Scrum", level: "Intermediate" },
        { name: "CI/CD", level: "Beginner" },
        { name: "Testing Frameworks", level: "Beginner" },
        { name: "Code Review", level: "Intermediate" }
      ]
    },
    {
      title: "Systems & Tools",
      icon: "🛠️",
      skills: [
        { name: "Unix/Linux", level: "Intermediate" },
        { name: "System Programming", level: "Intermediate" },
        { name: "Database Systems", level: "Beginner" },
        { name: "Jira", level: "Intermediate" },
        { name: "LaTeX", level: "Advanced" }
      ]
    },
    {
      title: "Mathematical & Analytical",
      icon: "📊",
      skills: [
        { name: "Algorithm Development", level: "Intermediate" },
        { name: "Mathematical Modeling", level: "Advanced" },
        { name: "Statistical Analysis", level: "Intermediate" },
        { name: "Data Structures", level: "Intermediate" },
        { name: "Problem Solving", level: "Advanced" }
      ]
    },
    {
      title: "Professional Skills",
      icon: "🤝",
      skills: [
        { name: "Team Collaboration", level: "Advanced" },
        { name: "Customer Service", level: "Advanced" },
        { name: "Technical Writing", level: "Intermediate" },
        { name: "Project Management", level: "Intermediate" },
        { name: "Time Management", level: "Advanced" }
      ]
    }
  ];

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Advanced": return "w-5/6 bg-green-500";
      case "Intermediate": return "w-3/5 bg-yellow-500";
      case "Beginner": return "w-2/5 bg-orange-500";
      default: return "w-1/2 bg-gray-500";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, from programming languages 
            to professional skills developed through hands-on experience and academic projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-800">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${getLevelWidth(skill.level)}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              What Sets Me Apart
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Math + CS Background</h4>
                <p className="text-sm text-gray-600">
                  Unique combination of mathematical reasoning and software development
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔐</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Clearance Eligible</h4>
                <p className="text-sm text-gray-600">
                  U.S. citizen eligible for government security clearances including TS/SCI
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Fast Learner</h4>
                <p className="text-sm text-gray-600">
                  Proven ability to quickly master new technologies and frameworks
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mission-Focused</h4>
                <p className="text-sm text-gray-600">
                  Passionate about building software that makes a meaningful impact
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies I'm Learning */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Currently Learning & Exploring
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Cloud Infrastructure", "Machine Learning", 
              "AI Technologies", "DevSecOps", "Microservices", "AWS"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;