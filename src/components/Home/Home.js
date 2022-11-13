import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import planet from "../../Assets/planet.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Timeline from "./Timeline";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <strong className="main-name"> Alex Zheng</strong>
          <Type />

        </Container>
      </Container>
      
      
    </section>
  );
}

export default Home;
