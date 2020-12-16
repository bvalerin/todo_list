import React from "react";
import Sidebar from "../menu/Sidebar";
import Header from "../header/Header";
import Cards from "../cards/Cards";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="mainContainer">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <header>
            <Header />
          </header>
          <section>
            <Cards />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
