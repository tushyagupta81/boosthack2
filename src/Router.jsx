import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App, Login, Dashboard } from "./pages/index.js";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
