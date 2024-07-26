import { useParams } from "react-router-dom";
import data from "../constants/data.js";
import { Nav } from "../sections/index.js";

const Post = () => {
  let id = useParams()["id"];
  let postData;
  for (let i = 0; i < data.length; i++) {
    if (data[i]["id"] == parseInt(id)) {
      postData = data[i];
    }
  }
  console.log(postData);
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl font-bold">{postData.title}</h1>
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
