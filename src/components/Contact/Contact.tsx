import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I’d love to connect! Whether you’d like to talk about software projects, 
            collaboration opportunities, or just share ideas — feel free to reach out.
          </p>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6">
            <span className="text-2xl mb-2">📞</span>
            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
            <a 
              href="tel:+12157679867" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              +1 (215) 767-9867
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6">
            <span className="text-2xl mb-2">✉️</span>
            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
            <a 
              href="mailto:nathaliavalli@gmail.com" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              nathaliavalli@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6">
            <span className="text-2xl mb-2">💼</span>
            <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
            <a 
              href="https://www.linkedin.com/in/nathaliavalli/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Nathalia_Valli


            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
