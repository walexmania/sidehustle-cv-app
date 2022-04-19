import React from "react";

function Section({ title, dob, pob, sex, origin, lga, nation, language }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="profile">
        <p>Date of Birth: </p>
        <p>{dob}</p>
      </div>
      <div className="profile">
        <p>Place of Birth: </p>
        <p>{pob}</p>
      </div>
      <div className="profile">
        <p>Sex: </p>
        <p>{sex}</p>
      </div>
      <div className="profile">
        <p>State of Origin: </p>
        <p>{origin}</p>
      </div>
      <div className="profile">
        <p>Local Gov't Area: </p>
        <p>{lga}</p>
      </div>
      <div className="profile">
        <p>Nationality: </p>
        <p>{nation}</p>
      </div>
      <div className="profile">
        <p>Language Spoken: </p>
        <p>{language}</p>
      </div>
    </div>
  );
}

export default Section;
