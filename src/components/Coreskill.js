import React from "react";
// import Section from "./Section";

function Coreskill({ title, skills }) {
  return (
    <section>
      <h1>{title}</h1>
      <ul>
        {skills.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </section>
  );
}

export default Coreskill;
