import { submodules, chapters } from "../constants/index.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Nav } from "../sections/index.js";
import { Card } from "../components";

const Dashboard = () => {
  let id = useParams()["id"];
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center bg-gray-100 mb-4">
        <div className="bg-white p-8 shadow-md w-full">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Welcome to the {chapters[id].title}!
          </h2>
        </div>
      </div>
      <div className="flex flex-col w-[90%] gap-4 m-auto">
        {submodules.map((obj, index) => {
          if (obj.chapterId === parseInt(id)) {
            return (
              <Link to={`${obj.id}`} key={index}>
                <Card data={obj} />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default Dashboard;
