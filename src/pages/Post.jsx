import { useParams } from "react-router-dom";
import { lessons, submodules } from "../constants/index.js";
import { Nav, Footer } from "../sections/index.js";

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
      <Nav page="posts" />
      <div className="flex flex-col w-[90%] mx-auto my-2 gap-6">
        <h1 className="text-3xl font-bold mx-auto text-blue-700">
          {submodules[parseInt(subId) - 1].title}
        </h1>
        <hr className="border-t-2 border-blue-600 my-4"></hr>
        {postData.info.map((para, index) => (
          <p key={index} className="mx-12">
            {para}
          </p>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Post;
