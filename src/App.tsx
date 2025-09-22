import React from 'react';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Add padding-top to account for fixed header */}
      <main className="pt-16">
        <div className="bg-blue-500 text-white p-8 text-center">
          <h1 className="text-4xl font-bold">Nathalia Valli</h1>
          <p className="text-xl mt-2">Software Engineer & Problem Solver</p>
        </div>
        
        <div className="max-w-4xl mx-auto p-8">
          <p className="text-gray-700 text-lg">
            Coming soon: Full portfolio with projects, skills, and more!
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;