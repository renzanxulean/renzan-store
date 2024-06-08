import { FaPhone } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between md:justify-around">
        <div className="text-xl font-bold cursor-pointer">RenzanStore</div>

        {/* Navigation Menu */}
        <div className="flex items-center space-x-6 font-roboto">
          <a
            href="https://m.me/RenzanXulean"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-cyan-600 transition duration-150"
          >
            <FaPhone className="text-2xl" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
