import React, { Fragment } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <main>
        <Navigation />
        <Header />
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
