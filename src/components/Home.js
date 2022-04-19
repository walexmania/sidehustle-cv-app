import React from "react";
import Section from "./Section";
import Coreskill from "./Coreskill";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Referee from "./Referee";

function Home() {
  return (
    <section className="home">
      <Section
        title="PERSONAL DETAILS"
        dob="12th of May"
        pob="Lagos"
        sex="Male"
        origin="Ogun State"
        lga="Yewa South"
        nation="Nigeria"
        language="English and Yoruba"
      />
      <Coreskill
        title="CORE SKILLS"
        const
        skills={[
          "IT Skills: Proficiency in Microsoft Office suite, Hardware, Software and Network troubleshooting.",
          "Web Development Skills: Proficiency in HTML5, CSS3, Bootstrap, Javascript, JQuery, WordPress, React",
          "Exceptional interpersonal and communication skills – both written and verbal",
          "Versatility and eager to learn",
          "Polite, innovative and resourceful",
          " Effective team player and time management",
          "Ability to anticipate problems and solve them as they arise",
          " Ability to work unsupervised and meeting up with unstipulated deadlines.",
        ]}
      />
      <WorkExperience
        title="WORK EXPERIENCE"
        work="LUMOS NIGERIA"
        addr="Apapa - Oshodi Expressway, Lagos State"
        position="Test Engineer (CONTRACT)"
        date="October 2020 till date"
        const
        description={[
          "Use of Photovoltaic (PV) test machine to flash test the panels",
          "Ensure the Solar Panels meet the standard requirement before field deployment.",
          "Recording of test results for solar panel performance evaluation and recommendation",
        ]}
      />
      <WorkExperience
        work="CHARVET GROUP (SELLWELL NIGERIA LIMITED)."
        addr="88/90 Muritala Muhammed Int’l Airport Road, Mafoluku, Oshodi, Lagos State"
        position="Data Entry Officer (Charvet Head Office)"
        date="July 2017 – April 2018"
        const
        description={[
          "Collecting and updating weekly and monthly sales report from Area Sales Managers by region",
          "Collecting and updating reports for Mobile and In-store merchandiser nationwide.",
          "Compiling, verifying accuracy and sorting information to prepare source data",
          "Reconciliation cash sales van of marketers on daily basis",
          "Collecting and updating stock reports of all depots, wholesalers, etc.",
          "Preparing performance sheet for customers and Sales Representatives.",
          "Preparing of daily route plan for Sales Representatives.",
          "Maintaining sales report of Key Accounts, On-Premise outlets and HORECA (Hotels, Restaurants and Cafés)",
          "Preparing of the summary for the sales of the week of each Van Sales Representative.",
          "Maintaining of exclusivity files for On-Premise outlets",
          "Generating monthly sales report by region.",
          "Generating nationwide sales report.",
        ]}
      />
      <WorkExperience
        work="A.GL SOLUTIONS (DEBT RECOVERY)"
        addr="Montgomery Road, Sabo Yaba, Lagos State"
        position="Recovery Officer"
        date="February – May 2016"
        const
        description={[
          "Recovery of all outstanding debts the customers owes the bank through consistent persuasion.",
          "Tracking down of customers, if contact address/phone number isn’t reachable",
          "Reporting any case of fraud by the customers to the Special Fraud Unit (S.P.U) for investigation.",
          "Issuing of clearance letter for the customers that cleared their outstanding debt.",
        ]}
      />
      <Education
        title="EDUCATION"
        school="OSUN STATE UNIVERSITY – "
        addr="Osogbo, Osun State"
        degree="M.A – Intelligence and Strategic Studies (In View)"
        date="2018 till date"
      />
      <Education
        school="OLABISI ONABANJO UNIVERSITY – "
        addr=" Ago-Iwoye, Ogun State"
        degree="B.Sc – Computer Engineering (Second Class Honours)"
        date="2009 - 2014"
      />
      <Education
        school="SKYLIGHT COMPREHENSIVE COLLEGE– "
        addr=" Ipaja, Lagos State"
        degree="Senior Secondary Certificate Examination (NECO O’Level)"
        date="2003 - 2008"
      />
      <Referee title="REFEREE" />
    </section>
  );
}

export default Home;
