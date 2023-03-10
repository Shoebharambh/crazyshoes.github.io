import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './HOME/home';
import Men from "./Men/men"
import Women from './Women/women';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element={<Men />} />
          <Route exact path="/women" element={<Women />} />
            {/* <Route path="sale" element={<NoPage />} />
            <Route path="customize" element={<NoPage />} />
            <Route path="snkrs" element={<NoPage />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
