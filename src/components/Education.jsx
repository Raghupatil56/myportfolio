const Education = () => {
    const educationDetails = [
        {
            institution: "Cambridge Institute of Technology",
            location: "Bangalore, Karnataka 560054",
            degree: "Master's in Business Administration in Finance ",
            duration: "2008 - 2010",
            cgpa: "",
        }
    ];

    return (
        <div className="mt-16 w-11/12 mx-auto text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center">Education</h2>
            <hr className="w-1/2 mx-auto border-3 border-gray-500 rounded-2xl mt-6 mb-8" />
            
            {educationDetails.length === 1 ? (
                // Centering if there is only one education entry
                <div className="flex justify-center">
                    <div className="border-4 rounded-2xl p-6 shadow-lg bg-gray-800 text-white w-2/3 text-center">
                        <p className="text-xl font-semibold">{educationDetails[0].institution}</p>
                        <p className="text-lg">{educationDetails[0].location}</p>
                        <p className="text-lg font-semibold">{educationDetails[0].degree}</p>
                        <p className="text-lg">{educationDetails[0].duration}</p>
                        {educationDetails[0].cgpa && <p className="text-lg font-semibold">{educationDetails[0].cgpa}</p>}
                    </div>
                </div>
            ) : (
                // Grid layout for multiple education entries
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {educationDetails.map((edu, index) => (
                        <div key={index} className="border-4 rounded-2xl p-6 shadow-lg bg-gray-800 text-white">
                            <p className="text-xl font-semibold">{edu.institution}</p>
                            <p className="text-lg">{edu.location}</p>
                            <p className="text-lg font-semibold">{edu.degree}</p>
                            <p className="text-lg">{edu.duration}</p>
                            {edu.cgpa && <p className="text-lg font-semibold">{edu.cgpa}</p>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
    
};

export default Education;
