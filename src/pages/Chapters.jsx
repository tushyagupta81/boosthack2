import { chapters } from "../constants/index.js";
import { Nav } from "../sections/index.js";
import { Link } from "react-router-dom";
import { Card } from "../components";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center bg-gray-100 mb-4">
        <div className="bg-white p-8 shadow-md w-full">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Welcome to the Chapters!
          </h2>
        </div>
      </div>
      <div className="flex flex-col w-[90%] gap-4 m-auto">
        {chapters.map((obj, index) => (
          <Link to={`${obj.id}/submodules`} key={index}>
            <Card data={obj} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
