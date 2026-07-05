import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Contact",
    ];
    return (
        <nav>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600">
                    Emon
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 font-medium">
                    {navLinks.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-blue-600 transition"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Resume
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col py-4">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="px-6 py-3 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </a>
                        ))}

                        <a
                            href="/resume.pdf"
                            className="mx-6 mt-3 bg-blue-600 text-white py-2 rounded-lg text-center"
                        >
                            Resume
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Header;