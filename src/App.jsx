import { useState } from 'react';
import './index.css';

// GitHub SVG icon component
const GitHubIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.545 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.853 0 1.337-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

function App() {
  const checks = [
    { label: "Numbers", range: "(0-9)" },
    { label: "Small Letters", range: "(a-z)" },
    { label: "Capital Letters", range: "(A-Z)" },
    { label: "Spacial Characters", range: "(!@#$...)" }
  ];
  const [inputLength, setInputLength] = useState(8);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-2 relative">
      {/* Top right GitHub logo and name */}
      <div className="absolute top-4 right-4 z-20">
        <a
          href="https://github.com/PrabhjotSinghUbhi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-cyan-700 shadow-xl hover:from-cyan-900 hover:to-cyan-700 hover:border-cyan-400 transition-all duration-200 group"
          title="GitHub"
        >
          <span className="p-1 bg-cyan-900 rounded-full group-hover:bg-cyan-700 transition">
            <GitHubIcon />
          </span>
          <span className="ml-1.5 text-cyan-300 font-bold text-base sm:text-lg group-hover:text-cyan-400 transition">
            PrabhjotSinghUbhi
          </span>
        </a>
      </div>
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-md md:max-w-lg border border-gray-700">
        <h1
          id="heading"
          className="text-2xl sm:text-3xl font-extrabold text-center text-cyan-400 mb-4 sm:mb-6 tracking-wide drop-shadow-lg"
        >
          Password Generator
        </h1>
        <div className="mb-6">
          <label htmlFor="showPassword" className="block text-gray-300 font-semibold mb-2 text-center">
            Your Password
          </label>
          <div
            id="showPassword"
            className="text-cyan-300 text-center font-mono bg-gray-700 px-3 py-3 rounded-lg w-full text-lg sm:text-xl break-all border border-cyan-700 shadow-inner"
          >
            {/* Password will be shown here in real time */}
            password_here
          </div>
        </div>
        <div id="slider" className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
          <input
            type="range"
            name="Length"
            id="length"
            min={8}
            max={30}
            value={inputLength}
            onChange={e => setInputLength(Number(e.target.value))}
            className="w-full sm:w-3/4 accent-cyan-400"
          />
          <span
            id="inputValue"
            className="bg-cyan-900 text-cyan-200 px-3 py-1 rounded-lg font-mono text-lg border border-cyan-700 mt-2 sm:mt-0 shadow"
          >
            {inputLength}
          </span>
        </div>
        <ul className="flex flex-col gap-3 mb-8">
          {checks.map(check => (
            <li key={check.label} className="flex items-center gap-3">
              <input
                type="checkbox"
                name={check.label}
                id={check.label}
                className="accent-cyan-400 w-5 h-5"
              />
              <label htmlFor={check.label} className="text-gray-200 font-medium text-sm sm:text-base flex items-center gap-2">
                {check.label}
                <span className="text-cyan-400 font-mono text-xs sm:text-sm">{check.range}</span>
              </label>
            </li>
          ))}
        </ul>
        <div className="text-center text-gray-500 text-xs">
          Password updates in real time as you change options.
        </div>
      </div>
      {/* Credits Section */}
      <footer className="mt-8 mb-4 text-center text-gray-400 text-xs flex flex-col items-center gap-2">
        <span>
          Made with <span className="text-red-500">♥</span> by{" "}
          <a
            href="https://www.linkedin.com/in/prabhjot-singh-0a7780306/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-300 hover:underline hover:text-cyan-400 transition"
          >
            Prabhjot Singh
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
