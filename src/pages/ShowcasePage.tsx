import React from "react";
import "../styles/Showcase.css";
import filmMarcoAurelio from "../assets/films/filmMarcoAurelio.jpg";
import filmTheChosen from "../assets/films/filmTheChosen.jpg";
import filmPeakyBlinders from "../assets/films/filmPeakyBlinders.jpg";
import filmHalloween from "../assets/films/filmHalloween.png";
import filmDostoiévski from "../assets/films/filmDostoiévski.jpg";
import filmTolstoi from "../assets/films/filmTolstói.jpg";
import filmMatrix from "../assets/films/filmMatrix.png";
import filmPiratasDoCaribe from "../assets/films/filmPiratasDoCaribe.jpg";
import filmOHobbit from "../assets/films/filmOHobbit.jpg";
import filmOHobbit2 from "../assets/films/filmOHobbit2.jpg";
import filmOHobbit3 from "../assets/films/filmOHobbit3.jpg";
import filmSenhorDosAneis from "../assets/films/filmSenhorDosAneis.jpg";
import filmSenhorDosAneis2 from "../assets/films/filmSenhorDosAneis2.jpg";
import filmSenhorDosAneis3 from "../assets/films/filmSenhorDosAneis3.jpg";
import filmPlatao from "../assets/films/filmPlatao.jpg";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  const linkedin =
    "https://www.linkedin.com/in/vinícius-kalach-freitas-cato-a91951192";

  return (
    <>
      <div className="HeaderShowcase">
        <h1>NETFLEX</h1>
        <Link to="/login">Sair</Link>
      </div>

      <div className="wrapper">
        <section id="section1">
          <a href="#section3">‹</a>
          <div className="item">
            <img src={filmPeakyBlinders} alt="série Peaky Blinders" />
          </div>
          <div className="item">
            <img src={filmMarcoAurelio} alt="filme do Marco Aurélio" />
          </div>
          <div className="item">
            <img src={filmTheChosen} alt="série The Chosen" />
          </div>
          <div className="item">
            <img src={filmHalloween} alt="filme do Halloween" />
          </div>
          <div className="item">
            <img src={filmDostoiévski} alt="filme do Dostoiévski" />
          </div>
          <a href="#section3">›</a>
        </section>
        <section id="section2">
          <a href="#section1">‹</a>
          <div className="item">
            <img src={filmSenhorDosAneis3} alt="filme Senhor dos Anéis 3" />
          </div>
          <div className="item">
            <img src={filmMatrix} alt="filme Matrix" />
          </div>
          <div className="item">
            <img src={filmOHobbit} alt="filme O Hobbit 1" />
          </div>
          <div className="item">
            <img src={filmOHobbit2} alt="filme O Hobbit 2" />
          </div>
          <div className="item">
            <img src={filmOHobbit3} alt="filme O Hobbit 3" />
          </div>
          <a href="#section3">›</a>
        </section>

        <section id="section3">
          <a href="#section2">‹</a>
          <div className="item">
            <img src={filmPlatao} alt="filme do Platão" />
          </div>
          <div className="item">
            <img src={filmTolstoi} alt="filme do Tolstói" />
          </div>
          <div className="item">
            <img src={filmPiratasDoCaribe} alt="filme Piratas do Caribe" />
          </div>
          <div className="item">
            <img src={filmSenhorDosAneis} alt="filme Senhor dos Anéis 1" />
          </div>
          <div className="item">
            <img src={filmSenhorDosAneis2} alt="filme Senhor dos Anéis 2" />
          </div>
          <a href="#section1">›</a>
        </section>
      </div>

      <footer className="footer-container">
        <div className="footer-content">
          <div className="contact">
            <h3>Contato</h3>
            <p>
              viniciuscato@hotmail.com |{" "}
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="about-us">
          <h3>Sobre Nós</h3>
          <p>Netflex - Sua plataforma de streaming favorita.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
