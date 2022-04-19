import React from "react";

function Education({ title, school, addr, degree, date }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <section>
        <div className="edu">
          <div>
            <p>
              {school} <span>{addr}</span>
            </p>
            <p>{degree}</p>
          </div>
          <div>
            <p>{date}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
