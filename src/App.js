import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Body from './body';
import Footer from './footer';
import Header from './header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
          <Routes>
            <Route path="/" element={''}/>
          </Routes>
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
