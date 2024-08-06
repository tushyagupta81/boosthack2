import data from "../constants/data.js";
import { Nav } from "../sections/index.js";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Welcome to the Dashboard!
          </h2>
          {data.map((obj) => (
            <div
              key={obj.id}
              className="border-black rounded-md border my-4 p-2 shadow-md px-6 py-4"
            >
              <h2 className="font-bold text-2xl">{obj.title}</h2>
              {obj.info.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
