import { Auth, Cats, Home, Login, Menu, Register } from "pages";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cats" element={<Cats />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/login" element={<Login type={"login"} />}></Route>
          <Route path="/register" element={<Register type={"register"} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
