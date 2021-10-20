import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I'm <span className="purple">Bhanu </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />I have completed my bacherlo's degree from Indian Instititue of Technology Tirupati. And I have 2 years of work expereince.
            Currently I'm pursuing my masters degree at <span className="purple">Texas A<span>&#38;</span>M University</span>, College Station. 
            I have been working on <span className="purple">Deep Learning</span> projects throughout my undergrad and work.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games <span>&#38;</span> Huge fan of cricket.
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
