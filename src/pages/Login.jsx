import { Nav } from "../sections/index.js";

const Login = () => {
  return (
    <>
      <form class="bg-gray-100 flex items-center justify-center min-h-screen  p-6 rounded-lg shadow-md w-full max-w-sm mt-40 mb-40">
      <div>
          <header class="text-2xl font-bold mb-4">Sign In </header>
          <p class="mb-4 text-gray-600">If you already have an account sign in here.</p>
          <div class="mb-4">
          <label for="uname" class="block text-gray-700 mb-2">
              Username
          </label>
        <input type="text" placeholder="Enter Username" name="uname" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
          </div>
          <div class="mb-4">
        <label for="psw" class="block text-gray-700 mb-2">Password</label>
        <input type="password" placeholder="Enter Password" name="psw" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
          </div>
          <div class="flex items-center justify-between mb-4">
        <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"  /> Remember me
        </label>
          </div>
      </div>
      </form>
    </>
  );
};

export default Login;
