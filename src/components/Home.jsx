import { useEffect } from "react";

import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Feedback from "./Feedback";

const Home = () => {

  return (
    <section className="min-h-screen pt-20 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center w-11/12 mx-auto">
        <div className="p-7 m-6 w-full md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5">
            Seema P Pateela
          </h1>
          <p className="text-lg md:text-xl font-semibold">
            I am a finance and investment banking professional with over 10 years of experience in corporate actions, financial reconciliation, trade settlements and risk management. Currently, as a Team Lead at Societe Generale, I manage Middle Office Services, ensuring accuracy in mandatory corporate actions, cash dividends and FO/BO reconciliations. Previously, I worked at Accenture, TCS and Mphasis, specializing in voluntary corporate actions, stock borrow and lending, securities settlement and financial reconciliation. I hold Six Sigma certifications and advanced Excel proficiency, leveraging my leadership, analytical, and stakeholder management skills to drive process efficiency, risk mitigation and compliance.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/myportfolio/seema Pateela 2.jpg"
            alt="Seema Pateela"
            className="w-48 md:w-72 lg:w-96 h-auto rounded-full drop-shadow-[0px_0px_80px_rgba(255,0,187,0.9)] object-cover"
          />
        </div>
      </div>

      <Education />
      <Skills />
      <Experience />
      <Feedback />
    </section>
  );
};

export default Home;
