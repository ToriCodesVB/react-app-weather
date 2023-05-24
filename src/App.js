import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <h1><Weather defaultCity="Dubai" /></h1>
        <footer>
          This project was coded by Viktoriia Baburkina and is{" "}
          <a
            href="https://github.com/ToriCodesVB/react-app-weather"
            target="blank">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://admirable-sherbet-98afb4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
