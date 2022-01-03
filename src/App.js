import React from "react";

// important warn - from react-router-dom 6 there are lots of changes
// compare with previews versions - read the docs
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import PageNotFound from "../src/pages/PageNotFound/PageNotFound";
import MovieDetail from "../src/pages/MovieDetail/MovieDetail";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import "./App.scss";

// build the routes for the website
function App() {
  return (
    <div>
      <Header />
      <div className="container">

      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App()