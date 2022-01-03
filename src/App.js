import React from "react";

// important warn - from react-router-dom 6 there are lots of changes
// compare with previews versions - read the docs
// react-router-dom 6+ has lots of change - read docs
// here we are using react-router-dom 5.2.0
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import PageNotFound from "../src/pages/PageNotFound/PageNotFound";
import MovieDetail from "../src/pages/MovieDetail/MovieDetail";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import "./App.scss";

// build the routes for the website
export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
