import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import IntroLayout from "./layouts/intro";
import MainLayout from "./layouts/main";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";

function App() {
  return (
    <Routes>
      {/* <Route to="/" element={<IntroLayout />} />
      <Route to="/main/*" element={<MainLayout />} />
      <Route to="/auth/*" element={<AuthLayout />} />
      <Route to="/admin/*" element={<AdminLayout />} /> */}
      {/* <Route path="/" element={<Navigate to="/intro" replace/>}/> */}
      <Route exact path="/" element={<IntroLayout/>} />
    </Routes>
  );
}

export default App;
