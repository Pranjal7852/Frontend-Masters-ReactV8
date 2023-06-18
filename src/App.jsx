import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchParam from "./components/SearchParam";
import Deatils from "./components/Details";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Deatils />} />
            <Route path="/" element={<SearchParam></SearchParam>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
