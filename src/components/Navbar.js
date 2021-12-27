import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(true);
  return (
    <div className="w-screen h-19 fixed bg-white flex  justify-between py-4 pr-5 z-40">
      {/* mobile menu */}
      <div
        className={`${
          mobileMenu
            ? "transform -translate-x-full transition duration-200"
            : "transform translate-x-0 transition duration-200"
        } w-screen h-screen bg-white mt-[3.75rem] absolute left-0 inset-y-0 ease-in-out border-t`}
      >
        <ul className="mt-5 mx-8 divide-y space-y-4 text-lg">
          <li>
            <a href="https://about.me/">Home</a>
          </li>
          <li className="pt-3">
            <a href="https://about.me/features">Features</a>
          </li>
          <li className="pt-3">
            <a href="https://about.me/pricing">Pricing</a>
          </li>
        </ul>
      </div>

      {/* navbar items*/}
      <ul className="flex">
        <li className="mx-2 sm:hidden">
          <button
            className={`
            ${mobileMenu ? "" : "text-sky-600 border-2 border-sky-600 rounded"}
            font-medium text-lg flex pr-2`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
            <span className="font-medium text-lg">about.me</span>
          </button>
        </li>
        <li className="font-medium text-lg ml-5 hidden sm:block">
          <a href="https://about.me/">about.me</a>
        </li>
      </ul>
      <ul className="flex justify-between text-base font-sans space-x-5 sm:space-x-10 mt-1 mr-3">
        <li className="font-sans font-bold hidden sm:block">
          <a href="https://about.me/welcome">Get started for free</a>
        </li>
        <li className="font-sans font-bold shrink-0 sm:hidden">
          <a href="https://about.me/welcome">Get your page</a>
        </li>
        <li className="hidden sm:block">
          <a href="https://about.me/features">Features</a>
        </li>
        <li className="hidden sm:block">
          <a href="https://about.me/pricing">Pricing</a>
        </li>
        <li className="shrink-0">
          <a href="https://about.me/login">Log In</a>
        </li>
      </ul>
    </div>
  );
}
