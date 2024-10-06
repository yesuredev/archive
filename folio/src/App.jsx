// import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./comp/Home";
import Career from "./comp/Career";
import Study from "./comp/Study";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <p>LOGO Test</p>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/study">Study</Link>
              </li>
            </ul>
          </nav>
          {/* {ScrollAnimation} */}
          <Routes>
            <Route path="*" element={<p>404 error</p>} />
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/study" element={<Study />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
