import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Gradudate Research Student at Texas A&M University",
          "Deep Learning Engineer",
          "Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay : 20,

      }}
    />
  );
}

export default Type;
