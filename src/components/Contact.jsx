import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">Contact Me</h2>

      <div className="border-4 border-white p-6 rounded-lg shadow-md w-full max-w-md md:max-w-lg">
        <p className="text-xl md:text-2xl font-bold mb-4"> 
          <a 
            href="mailto:seemapateela@yahoo.co.in" 
            className="text-white hover:text-3xl transition-transform duration-200"
          >
            📧 Email
          </a>
        </p>

        <p className="text-xl md:text-2xl font-bold mb-4">
          📞 Phone: 
          <a 
            href="tel:+919008668009" 
            className="text-white hover:text-3xl transition-transform duration-200 ml-2"
          >
            +91 9008668009
          </a>
        </p>

        <p className="text-xl md:text-2xl font-bold mb-4">
          <a 
            href="https://www.linkedin.com/in/seema-pateela-0a494a170/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-3xl transition-transform duration-200"
          >
            🔗 LinkedIn
          </a>
        </p>

        <p className="text-xl md:text-2xl font-bold mb-4">
          <a 
            href="https://github.com/Raghupatil56" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-3xl transition-transform duration-200"
          >
            💻 GitHub
          </a>
        </p>

        <p className="text-xl md:text-2xl font-bold">
          <a 
            href="/myportfolio/Seema_CV.pdf" 
            download 
            className="text-white hover:text-3xl transition-transform duration-200"
          >
            📄 Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
