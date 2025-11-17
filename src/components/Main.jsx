import React from "react";
import mainContent from "./src/icons/mainContent.png"


export default function MainContent() {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="p-10 max-w-lg bg-white rounded-xl shadow-2xl text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to MyApp</h1>
          <p className="text-lg text-gray-600 mb-6">
            This is your central landing page, powered by React, styled with Tailwind CSS, and managed with Redux Toolkit.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
            Start Exploring
          </button>
        </div>
      </main>
    );
  }
  