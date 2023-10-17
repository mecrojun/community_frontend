import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from "./register";
import Home from "./home";
import Post from "./post";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
