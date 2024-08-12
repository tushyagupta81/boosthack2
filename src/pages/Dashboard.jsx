import chapters from "../constants/data.js";
import { Nav } from "../sections/index.js";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
     <Nav/>
    <div className="text-6xl text-blue-500 grid place-items-center mb-10">
    <b className="">Welcome to Coin<span className="text-blue-800">ED</span></b>
    </div>
    <div className="flex justify-between items-stretch mx-11">
      <div className="mr-10 text-3xl ml-12 border-r-2 border-blue-800 ">
        <div className="mb-10">count</div>
        score
        </div>
      <div className="mr-10 text-3xl border-r">
        <div className="mb-10">random</div>
        streak
        </div>
      <div className="mr-12 text-3xl ">
        <div className="mb-10">number</div>
        lessons<br></br>completed
        </div>
    </div>
    <div>
      <div><Link to="./constants/stock_market_basics">module1</Link></div>
      <div><Link>module2</Link></div>
      <div><Link>module3</Link></div>
      <div><Link>module4</Link></div>
      <div><Link>module5</Link></div>
    </div>
    </>
  );
};

export default Dashboard;
