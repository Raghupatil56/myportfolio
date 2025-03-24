import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const hour = new Date().getHours();
    let greeting = "Good Morning";
    if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
    else if (hour >= 17 && hour < 21) greeting = "Good Evening";
    else if (hour >= 21 || hour < 5) greeting = "Good Night";

    return (
        <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Greeting */}
                <h1 className="text-xl md:text-2xl font-bold font-serif">Hello! {greeting}</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-bold text-lg">
                    <Link to="myportfolio/" className="hover:text-gray-400">Home</Link>
                    <Link to="myportfolio/Experience" className="hover:text-gray-400">Experience</Link>
                    <Link to="myportfolio/Contact" className="hover:text-gray-400">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu (Appears when menuOpen is true) */}
            {menuOpen && (
                <div className="md:hidden flex flex-col bg-gray-800 py-4">
                    <Link to="myportfolio/" className="py-2 hover:bg-gray-700 text-center" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="myportfolio/Experience" className="py-2 hover:bg-gray-700 text-center" onClick={() => setMenuOpen(false)}>Experience</Link>
                    <Link to="myportfolio/Contact" className="py-2 hover:bg-gray-700 text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
