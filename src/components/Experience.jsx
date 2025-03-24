const Experience = () => {
    const experienceDetails = [
        {
            company: "SOCIETE GENERALE",
            title: "Team Lead - Middle Office Management Services",
            timeline: "Mar 2020 – Present",
            description: (
                <p>
                    Currently working as a Team Lead in Middle Office Management Services, managing Mandatory Corporate Actions. Responsibilities include analyzing corporate action information received from various sources such as SWIFT messages (MT564), Bloomberg, and DTC, ensuring that all events are processed accurately and in compliance with industry standards. This role involves determining the proper course of action for corporate events, reconciling Front Office (FO) and Back Office (BO) bookings and ensuring cash dividend activities are correctly managed. <br />
                    Additionally, I play a key role in process improvement and risk management, identifying inefficiencies and proposing solutions to enhance workflow. Regularly updating Standard Operating Procedures (SOPs) and conducting internal audits are part of my responsibilities to ensure that compliance standards are met. I also take on supervisory responsibilities in the absence of the departmental manager, handling escalation situations and providing guidance on corporate actions. <br />
                    A key achievement in this role has been enhancing operational efficiency by identifying ineffective areas within existing processes and implementing improvements, which has led to higher accuracy and reduced processing times. My ability to maintain strong relationships with stakeholders, cross-functional teams, and vendors ensures smooth operations.
                </p>
            ),
        },
        {
            company: "ACCENTURE",
            title: "Subject Matter Expert ",
            timeline: "May 2013 – Mar 2020",
            description: (
                <p>
                    <strong>Tasks Performed:</strong>
                    Worked as a Subject Matter Expert (SME) in the Voluntary Corporate Actions Department, specializing in handling Fixed Income, Bonds, and Equity, particularly in the US market. My role involved performing deadline activities for corporate action events, ensuring timely and accurate processing of voluntary corporate actions. Responsibilities included event announcements, event captures in backstreams, obtaining elections from counterparties and front offices and passing liabilities to the concerned teams. I was responsible for instructing on tendered positions, SWIFT notifications (MT565, MT599) and trade settlements. <br />
                    I played a crucial role in managing event flows, reconciling SWIFT MT564 and MT566 notifications and verifying event setups to ensure that event details were accurately reflected in internal systems. A major part of my work involved handling stock borrow and lending payments, ensuring accurate dividend payments and reconciling discrepancies. <br />
                </p>
            ),
            Achievements: (
                <p>
                    <strong>Achievements</strong>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Received Numero Uno award for learning the corporate action in short span of time without any core competency and exceeded expectation by meeting the target in clearing the month end breaks prior to SLA</li>
                        <li>Received Numero Uno award for meeting SLA when process underwent short of staff and received many appreciations from management.</li>
                        <li>Master Blaster award for submitting productive ideas and implementing the same.</li>
                        <li>Cracker of the Month contest winner for clearing 290 cash breaks in one day.</li>
                        <li>Received many spot awards.</li>
                    </ul>
                </p>
            ),
        },
        {
            company: "TATA CONSULTANCY SERVICES",
            title: "Process Associate ",
            timeline: "May 2012 – July 2013",
            description: (
                <p>
                    Worked as a Process Associate, focusing on securities and cash settlement instructions. My responsibilities included updating settlement instructions in different applications to ensure Straight Through Processing (STP), investigating and resolving missing instructions, handling agent unmatched trades and processing settlement instruction rejections. <br />
                    I was responsible for prime broker account reconciliations, updating Deutsche Bank London securities settlement instructions and conducting internal audits within the team. Additionally, I prepared Management Information System (MIS) reports, documented workflows and trained new employees. My role also required expertise in internationally used applications such as Omega Alert and SWIFT messaging services. <br />
                    My key contributions included enhancing data accuracy, reducing settlement errors and improving operational efficiency. I also played an important role in ensuring compliance with audit requirements and strengthening relationships with internal stakeholders.
                </p>
            ),
        },
        {
            company: "MPHASIS-AN HP COMPANY",
            title: "Transaction Processing Officer  ",
            timeline: "Oct 2010 – Mar 2012",
            description: (
                <p>
                    Worked as a Transaction Processing Officer, handling cost basis updates, financial reconciliation, and corporate action processing. I was responsible for updating cost basis from CBUF and Legacy systems, reconciling client accounts, and providing profit/loss portfolio updates. My work involved processing various corporate actions such as mergers, stock splits, spin-offs and tender offers, ensuring accurate calculations of gain/loss reports. <br />

                    Additionally, I provided clients with quarterly and annual financial reports, investigated missing cost basis for securities, and ensured that updates were accurately reflected in client portfolios. I also gained expertise in versus purchase of stocks on the OTC market and collaborated with clients on cost basis research. <br />

                    My contributions in this role were focused on enhancing financial data accuracy, ensuring regulatory compliance, and improving reconciliation processes. I successfully maintained a high standard of quality, meeting SLAs and improving customer satisfaction. <br />
                </p>
            ),
        },
    ];

    return (
        <div className="mt-16 w-11/12 mx-auto text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center">Experience</h2>
            <hr className="w-1/2 mx-auto border-3 border-gray-500 rounded-2xl mt-6 mb-4" />

            {/* Responsive Layout */}
            <div className="flex flex-col items-center">
                {experienceDetails.map((exp, index) => (
                    <div key={index} className="w-full lg:w-11/12  p-6  text-white mb-8">
                        <p className="text-2xl font-bold">{exp.company}</p>
                        <p className="text-xl font-semibold">{exp.title}</p>
                        <p className="text-lg font-medium">{exp.timeline}</p>
                        <div className="text-lg mt-4">{exp.description}</div>
                        <div className="text-lg mt-4">{exp.Achievements}</div>
                        {index !== experienceDetails.length - 1 && (
                            <hr className="w-11/12 mx-auto border border-gray-700 mt-6" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
