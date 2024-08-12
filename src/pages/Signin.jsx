import { Nav } from "../sections/index.js";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();}

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation and mock authentication
    if (email === 'user@example.com' && password === 'password') {
      setAuth(true);
      navigate('/Dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

const Signin = () => {
  return (
    <>
      <form className="bg-gradient-to-b from-blue-100 to-blue-600 flex items-center justify-center min-h-screen p-6 rounded-lg shadow-md w-full" onSubmit={handleSubmit}>
        <div>
          <header className="text-2xl font-bold mb-4">Sign In</header>
          <p className="mb-4 text-gray-600">
            If you don{"'"}t have an account sign up{" "}
            <span className="underline text-[#0000EE]">
              <Link to="/signup">here</Link>
            </span>
            .
          </p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="psw" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-black focus:outline-none"
            >
             <Link to={"/dashboard"}>Login</Link>
            </button>
            <label>
              <input
                type="checkbox"
                name="remember"
                className="form-checkbox h-4 w-4 mr-1 text-blue-600 transition duration-150 ease-in-out"
              />
              Remember me
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
