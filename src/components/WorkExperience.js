import React from "react";

function WorkExperience({ title, work, addr, position, date, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <section>
        <article className="Work">
          <h4>{work}</h4>
          <address>{addr}</address>
          <h5>{position}</h5>
          <p>{date}</p>
          <ul>
            {description.map((des, index) => {
              return <li key={index}>{des}</li>;
            })}
          </ul>
        </article>
      </section>
    </div>
  );
}

export default WorkExperience;
