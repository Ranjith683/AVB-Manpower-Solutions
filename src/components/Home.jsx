import React from "react";
import Navbar from "./Navbar";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import bgVideo from "../assets/bg-video.mp4";

import recruitmentImg from "../assets/images/recruitmentImg.jpg";
import staffingImg from "../assets/images/staffingImg.jpg";
import payrollImg from "../assets/images/payrollImg.jpg";
import statutoryImg from "../assets/images/statutoryImg.jpg";
import trainingImg from "../assets/images/trainingImg.jpg";
import hrpolicyImg from "../assets/images/hrpolicyImg.jpg";

const cardData = [
  {
    id: 1,
    image: recruitmentImg,
    title: "Recruitment",
    description:
      "We blend personalized strategy with a clear, informed process, ensuring each executive search is uniquely tailored to align with your company's specific goals, culture, and values.",
  },
  {
    id: 2,
    image: staffingImg,
    title: "Contact Staffing",
    description:
      "We actively support you in strategically placing your board of directors based on skills that are future-ready, ensuring a diverse range of innovative ideas and expertise.",
  },
  {
    id: 3,
    image: payrollImg,
    title: "PayRoll Services",
    description:
      "We offer market mapping and personality assessments to enhance leadership abilities and navigate competitive landscapes, positioning your team for success.",
  },
  {
    id: 4,
    image: statutoryImg,
    title: "Statutory",
    description:
      "We offer market mapping and personality assessments to enhance leadership abilities and navigate competitive landscapes, positioning your team for success.",
  },
  {
    id: 5,
    image: trainingImg,
    title: "Traning",
    description:
      "We offer market mapping and personality assessments to enhance leadership abilities and navigate competitive landscapes, positioning your team for success.",
  },
  {
    id: 6,
    image: hrpolicyImg,
    title: "HR Policies",
    description:
      "We offer market mapping and personality assessments to enhance leadership abilities and navigate competitive landscapes, positioning your team for success.",
  },
];

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

      <section className="corevalue">
        <h1 className="core_heading">What We Delivering</h1>

        <div className="card-container">
          {cardData.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="card-btn">
                  Fine out More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
