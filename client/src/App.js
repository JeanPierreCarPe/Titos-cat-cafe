import { Cats, Home, Login, Menu } from "pages";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cats" element={<Cats />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
