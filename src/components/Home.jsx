import React from "react";
import Navbar from "./Navbar";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import bgVideo from "../assets/bg-video.mp4";

const Home = () => {
  return (
    <>
      <section className="hero">
        {/* Background Video */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="hero-overlay">
          <Navbar />

          {/* Center Content */}
          <div className="hero-content">
            <h1>AVB Manpower Solutions</h1>
            <h2>Delivering Skilled Talent. Driving Business Success.</h2>
            <a href="#why" className="hero-link">
              Why work with us →
            </a>
          </div>

          {/* Bottom Left */}
          <div className="hero-bottom-left">
            <a href="tel:+919944394666">📞 +91 74186 1555</a>
            <a href="tel:+919944394666">📞 +91 98946 27555</a>

            <a href="mailto:avbmanpowersolutions@gmail.com">
              ✉️ hravbms@gmail.com
            </a>
          </div>

          {/* Bottom Right */}
          <div className="hero-bottom-right">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>

            <a href="https://in.indeed.com" target="_blank" rel="noreferrer">
              <SiIndeed />
            </a>

            <a
              href="https://wa.me/918870101265"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>

      <section className="partner_section">
        <div className="marquee">
          <h1 className="partner">
            We are here to give the End to End Solutions ...
          </h1>
        </div>
      </section>

      <section className="text_section">
        <div className="bold_para">
          AVB Manpower{" "}
          <span className="span">Solutions offers ideal local staffing</span>{" "}
          solutions to meet all <span className="span">your talent needs.</span>
        </div>
        <div className="normal_para">
          We leverage deep regional insight combined with global expertise to
          deliver customized HR services across 100+ clients in India. Our
          commitment to exclusive, client-focused solutions sets us
          apart—ensuring reliable talent, strategic workforce support, and
          exceptional results for our partners.{" "}
        </div>
        <button className="team-btn">
          Meet our Team <span className="arrow">→</span>
        </button>
      </section>
    </>
  );
};

export default Home;
