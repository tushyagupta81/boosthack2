import { modules } from "../constants/index.js";
import { Nav } from "../sections/index.js";
import { Link } from "react-router-dom";
import { Card } from "../components";

const Dashboard = () => {
  return (
    <>
     <section>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">CoinEd</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900 hover:cursor-pointer">
                <Link to="/dashboard">Dashboard</Link>
              </a>
              <a className="mr-5 hover:text-gray-900 hover:cursor-pointer">
                <Link to="/chapters">Chapters</Link>
              </a>
              <a className="mr-5 hover:text-gray-900 hover:cursor-pointer">
                <Link to="/submodules">Topic</Link>
              </a>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-red-600 hover:text-white rounded text-base  mt-4 md:mt-0">
              <Link to="/app">Log Out</Link>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
      </section>
      <div className="flex items-center justify-center bg-gray-100 mb-4">
        <div className="bg-white p-8 shadow-md w-full">
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-500">
            Welcome to the <span className="text-blue-900">Chapters!</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col w-[90%] gap-4 m-auto">
        {modules.map((obj, index) => (
          <Link to={`${obj.id}/submodules`} key={index}>
            <div className="p-4 bg-white shadow-md rounded">
              <h3 className="text-2xl font-bold">
              <span className="text-blue-900">{obj.title}</span>
              </h3>
              <hr className="border-t-2 border-blue-600 my-4"></hr>
              <p>{obj.info}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
