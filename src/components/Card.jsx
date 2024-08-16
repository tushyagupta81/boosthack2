/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h3 className="text-2xl font-bold">
        <span className="text-blue-900">{data.title}</span>
      </h3>
      <hr className="border-t-2 border-blue-600 my-4"></hr>
      {data.info.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
};

export default Card;
