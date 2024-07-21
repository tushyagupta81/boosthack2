/* eslint-disable react/prop-types */
function Button({ name, extraClass }) {
  return (
    <button
      className={`py-4 px-8 bg-blue-500 drop-shadow-md rounded-full min-w-[121px] whitespace-nowrap ${extraClass}`}
    >
      {name}
    </button>
  );
}

export default Button;
