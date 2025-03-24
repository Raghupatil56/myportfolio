import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
    const skills = [
        "Corporate Actions Management",
        "Financial Data Analysis and Reconciliation",
        "Middle Office and Back Office Operations",
        "SWIFT Messaging",
        "Investment Banking",
        "Trade Settlement",
        "Stock Borrow and Lending",
        "Reconciliation of Financial Transactions",
        "MIS Preparation and Reporting",
        "Risk Assessment & Compliance Audits",
        "Six Sigma",
        "Advanced Excel knowledge",
        "Process improvement and problem-solving",
        "Strong leadership",
        "Relationship management",

    ];

    const skillLinks = {
        "Financial Data Analysis and Reconciliation": "https://www.investopedia.com/terms/f/financial-analysis.asp",
        "Middle Office and Back Office Operations": "https://ca.indeed.com/career-advice/finding-a-job/front-office-vs-back-office#:~:text=Front%2Doffice%20employees%20interact%20with,to%20work%20in%20your%20career",
        "SWIFT Messaging": "https://www.swift.com/about-us/discover-swift/messaging-and-standards",
        "Investment Banking": "https://www.investopedia.com/terms/i/investmentbank.asp",
        "Trade Settlement": "https://www.investopedia.com/terms/s/settlement_period.asp",
        "Stock Borrow and Lending": "https://www.kotaksecurities.com/investing-guide/share-market/stock-lending-and-borrowing-slbm/",
    };


    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    return (
        <div ref={ref} className="mt-16 w-11/12 mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-white">Skills</h2>
            <hr className="w-1/2 mx-auto border-3 border-gray-500 rounded-2xl mt-6 mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-center items-center border-3 border-white text-2xl sm:text-3xl font-semibold text-white rounded-xl p-6 sm:p-8 mx-auto w-80 shadow-md"
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } }}
                        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.3, delay: index * 0.07 }}
                    >
                        {skillLinks[skill] ? (
                            <a
                                href={skillLinks[skill]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                            >
                                {skill}
                            </a>
                        ) : (
                            <span>{skill}</span>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
