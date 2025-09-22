import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From customer service to software engineering - a journey of determination, 
            growth, and the pursuit of meaningful work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Main story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  My path to software engineering hasn't been conventional, but it's been incredibly 
                  rewarding. As a mother of two, I understand the value of time, efficiency, and 
                  getting things done right the first time. These skills, honed through years of 
                  managing a household while working in customer service, have become some of my 
                  greatest assets as a developer.
                </p>

                <p>
                  While working in customer service, I developed strong communication skills and 
                  learned how to solve problems under pressure while keeping customers happy. 
                  I discovered that I had a natural talent for troubleshooting issues and finding 
                  creative solutions - skills that translate beautifully to debugging code and 
                  architecting software systems.
                </p>

                <p>
                  The decision to pursue a Mathematics and Computer Science degree at Temple University 
                  while raising two children and managing a household wasn't easy, but it was driven 
                  by a deep passion for problem-solving and technology. I wanted to build a career 
                  that would not only provide stability for my family but also allow me to create 
                  solutions that make a real difference in people's lives.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Drives Me</h3>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Every late-night study session, every complex algorithm I've mastered, and every 
                  line of code I've written has been motivated by my desire to create something 
                  meaningful. Whether it's developing accessible applications like StoryQuest or 
                  building efficient systems, I'm driven by the impact technology can have on 
                  real people's lives.
                </p>

                <p>
                  My experience as a mother has taught me patience, multitasking, and the importance 
                  of clear communication - all essential skills in collaborative software development. 
                  I've learned to prioritize effectively, work efficiently under deadlines, and 
                  maintain attention to detail even when juggling multiple responsibilities.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Key qualities and stats */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What I Bring</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Exceptional Time Management</h4>
                    <p className="text-gray-600">
                      Successfully balanced full-time studies, parenting, household management, 
                      and work - proving I can handle complex priorities and deadlines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strong Communication Skills</h4>
                    <p className="text-gray-600">
                      Years of customer service experience taught me how to explain complex 
                      concepts clearly and work collaboratively with diverse teams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Problem-Solving Mindset</h4>
                    <p className="text-gray-600">
                      From debugging code to managing family logistics, I approach challenges 
                      with creativity, persistence, and analytical thinking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Resilience & Determination</h4>
                    <p className="text-gray-600">
                      Completing a demanding technical degree while raising two children has 
                      taught me that there's no challenge too big with the right mindset.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal touch */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Beyond Coding</h4>
              <p className="text-gray-700">
                When I'm not writing code or studying algorithms, you'll find me helping my 
                kids with their homework, teaching them problem-solving skills, or showing 
                them that with determination and hard work, you can achieve anything you set 
                your mind to. They're my biggest motivation and my proudest accomplishment.
              </p>
            </div>

            {/* Future goals */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Looking Forward</h4>
              <p className="text-gray-700">
                I'm excited to bring my unique perspective, strong work ethic, and technical 
                skills to a team where I can contribute to meaningful projects. I'm particularly 
                interested in roles where I can apply my problem-solving abilities to create 
                software that makes a real impact, whether in defense, healthcare, education, 
                or other mission-critical applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;