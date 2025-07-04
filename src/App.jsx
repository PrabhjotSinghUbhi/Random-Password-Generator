import { useCallback, useEffect, useState, useRef } from "react";
import "./index.css";

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

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      fill="#67e8f9"
      d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"
    />
  </svg>
);

function App() {
  // use state to update the length of the password.
  const [inputLength, setInputLength] = useState(12);

  //use state to update Number and Chars Allowed or not.
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefijklmnopqrstuvwxyz";

    if (charAllowed) str += `!@#$%^&*()_+-={}:"<>?,./;'[]*/~`;
    if (numAllowed) str += `1234567890`;

    for (let i = 0; i < inputLength; i++) {
      password += str.charAt(Math.round(Math.random() * str.length));
    }

    setPassword(password);
  }, [numAllowed, charAllowed, inputLength, setPassword]);

  const passwordRef = useRef(null);

  useEffect(() => {
    generatePassword();
  }, [generatePassword, inputLength, numAllowed, charAllowed]);

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
          <label
            htmlFor="showPassword"
            className="block text-gray-300 font-semibold mb-2 text-center"
          >
            Your Password
          </label>

          <div
            id="showPassword"
            className="text-cyan-300 flex justify-between items-center text-center font-mono bg-gray-700 px-3 py-3 rounded-lg w-full text-lg sm:text-xl break-all border border-cyan-700 shadow-inner"
          >
            <input
              ref={passwordRef}
              value={password}
              readOnly
              className="ml-5 bg-transparent outline-none border-none text-cyan-300 w-full font-mono text-lg sm:text-xl"
              style={{ minWidth: 0 }}
              aria-label="Generated password"
            />
            <button
              className="w-[45px] h-[45px] hover:bg-cyan-900 hover:rounded-2xl p-3 cursor-pointer"
              onClick={() => {
                passwordRef.current?.select();
                window.navigator.clipboard.writeText(password);
              }}
            >
              <CopyIcon />
            </button>
          </div>
        </div>

        <div
          id="slider"
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6"
        >
          <input
            type="range"
            name="Length"
            id="length"
            min={8}
            max={30}
            value={inputLength}
            onChange={(event) => setInputLength(Number(event.target.value))}
            className="w-full sm:w-3/4 accent-cyan-400 cursor-pointer"
          />

          <span
            id="inputValue"
            className="bg-cyan-900 text-cyan-200 px-3 py-1 rounded-lg font-mono text-lg border border-cyan-700 mt-2 sm:mt-0 shadow"
          >
            {inputLength}
          </span>
        </div>

        <ul className="flex flex-col gap-3 mb-8">
          <li key="Numbers" className="flex items-center gap-3">
            <input
              type="checkbox"
              name="Numbers"
              id="Numbers"
              className="accent-cyan-400 w-5 h-5"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label
              htmlFor="Numbers"
              className="text-gray-200 font-medium text-sm sm:text-base flex items-center gap-2"
            >
              <span>Numbers</span>
              <span className="text-cyan-400 font-mono text-xs sm:text-sm">
                (0-9)
              </span>
            </label>
          </li>

          <li key="Special Characters" className="flex items-center gap-3">
            <input
              type="checkbox"
              name="Special Characters"
              id="Special Characters"
              className="accent-cyan-400 w-5 h-5"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label
              htmlFor="Special Characters"
              className="text-gray-200 font-medium text-sm sm:text-base flex items-center gap-2"
            >
              <span>Special Characters</span>
              <span className="text-cyan-400 font-mono text-xs sm:text-sm">
                (!@#$...)
              </span>
            </label>
          </li>
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
