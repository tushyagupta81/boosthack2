import { Button } from "../components/index.js";
const JoinUs = () => {
  return (
    <>
      <div className="flex ml-5 mt-10 mr-5 max-md:flex-col max-md:mb-4">
        <h2 className="mr-4 text-blue-600 p-2 text-3xl font-bold whitespace-nowrap min-w-[141.25px]">
          Join Us
        </h2>
        <div className="border-l-2 rounded-sm p-4 text-lg">
          <p className="">
            Ready to take control of your financial future? Join CoinEd today
            and start your journey towards financial literacy and empowerment.
            Sign up or contact us to learn more about how we can help you
            achieve your financial goals.
          </p>
          <div className="flex gap-16 items-center mt-12 mx-4 max-md:flex-col max-md:gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-black py-4 px-8 rounded-full w-8/12 max-md:w-full"
            />
            <Button
              name="Sign Up"
              extraClass="max-md:mt-4 max-md:w-fit max-md:mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
