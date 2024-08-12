/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  return (
    <div className="flex flex-col border border-black rounded-md py-4 px-2 w-full">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      {data.info.map((para, index) => (
        <p key={index} className="">
          {para}
        </p>
      ))}
    </div>
  );
};

export default Card;
