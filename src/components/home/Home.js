import React from 'react';
import Sidebar from '../menu/Sidebar';
import Header from '../header/Header';
import Cards from '../cards/Cards';
import "./Home.css";
const Home = () => {
    return (
        <div className="mainContainer">
            <aside>
                <Sidebar />
            </aside>
            <main className="home">
                <header className="home__header">
                    <Header />
                </header>
                <section className="home__cards">
                    <Cards />
                </section>
            </main>
        </div>
    )
}

export default Home;