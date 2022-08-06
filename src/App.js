import React, { Fragment } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Feature from "./components/Feature/Feature";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Fragment>
      <main>
        <div className="container">
          <Navigation />
          <Header />
        </div>
        <Feature />
        <SignUp />
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
