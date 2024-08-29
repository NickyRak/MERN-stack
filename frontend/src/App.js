import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<div>Create</div>} />
            <Route path="/update" element={<div>Update</div>} />
            <Route path="/view" element={<div>View</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
