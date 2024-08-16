import { useParams } from "react-router-dom";
import { lessons, submodules } from "../constants/index.js";
import { Nav } from "../sections/index.js";
import { Link } from "react-router-dom";
const Post = () => {
  let id = useParams()["id"];
  let subId = useParams()["subId"];
  let postData = {
    title: "error",
    info: ["error"],
  };

  for (let i = 0; i < lessons.length; i++) {
    if (
      lessons[i]["moduleId"] === parseInt(id) &&
      lessons[i]["submoduleId"] === parseInt(subId)
    ) {
      postData = lessons[i];
      break;
    }
  }
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
      <div className="flex flex-col w-[90%] m-auto gap-6">
        <h1 className="text-3xl font-bold m-auto text-blue-700">
          {submodules[parseInt(subId) - 1].title}
        </h1>
        <hr className="border-t-2 border-blue-600 my-4"></hr>
        {postData.info.map((para, index) => (
          <p key={index} className="mx-12">
            {para}
          </p>
        ))}
      </div>
    </>
  );
};

export default Post;
