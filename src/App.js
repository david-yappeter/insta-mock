import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostPage from "./pages/Post";
import { AxiosProvider } from "./redux/mocks/adapter";

const App = () => {
  return (
    <div>
      <AxiosProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </AxiosProvider>
    </div>
  );
};

export default App;
