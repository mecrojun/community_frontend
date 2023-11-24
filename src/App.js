import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from "./register";
import Home from "./home";
import Post from "./post";
import CreatePost from "./createPost";
import MyInfo from "./myInfo";
import WatchPost from "./watchPost";

function App() {
  return (
    <div className="app_div">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/myInfo" element={<MyInfo />} />
          <Route path="/watchPost" element={<WatchPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
