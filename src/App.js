import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
function App() {

  return (
    <>
      <main className="bg-white px-10 md:px-20 lg:px-40 ">
          <Nav/>
          <Hero/>
          <Services/>
          <Portfolio/>
      </main>
    </>
  );
}

export default App;
