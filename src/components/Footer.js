export default function Footer() {
  return (
    <div className="w-screen h-15 fixed bottom-0 bg-white bg-opacity-90">
      <ul className="flex items-center justify-center sm:justify-start">
        <li className="text-lg ml-8 hidden sm:inline">
          Get a page and a domain with your name.
        </li>
        <li>
          <button className="h-10 w-56 px-4 my-2 mx-5 shrink-0 text-white text-lg transition-colors duration-150 bg-sky-600 rounded focus:shadow-outline hover:bg-sky-800">
            Get Started for free
          </button>
        </li>
      </ul>
    </div>
  );
}
