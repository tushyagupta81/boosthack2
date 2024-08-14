import { useParams } from "react-router-dom";
import { lessons, submodules } from "../constants/index.js";
import { Nav } from "../sections/index.js";

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
      <Nav />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold m-auto">
          {submodules[parseInt(subId) - 1].title}
        </h1>
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
