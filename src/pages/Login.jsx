import { Nav } from "../sections/index.js";

const Login = () => {
  return (
    <>
    <body class="bg-gradient-to-b from-white via-blue-400 to-blue-700 flex items-center justify-center min-h-screen">
      <form >
      <div>
          <header class="text-2xl font-bold mb-4">Sign In </header>
          <p class="mb-4 text-black">If you already have an account sign in here.</p>
          <div class="mb-4">
          <label for="uname" class="block text-gray-700 mb-2">
              Username
          </label>
        <input type="text" placeholder="Enter Username" name="uname" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div class="mb-4">
        <label for="psw" class="block text-gray-700 mb-2">Password</label>
        <input type="password" placeholder="Enter Password" name="psw" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div class="flex items-center justify-between mb-4">
        <button type="submit" class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 focus:outline-none">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" class="form-checkbox h-4 w-4 text-blue-800 transition duration-150 ease-in-out"  /> Remember me
        </label>
          </div>
      </div>
      </form>
      </body>
    </>
  );
};

export default Login;
