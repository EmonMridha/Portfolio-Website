import React from "react";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white flex items-center"
        >
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

                {/* Left Side */}
                <div>

                    <p className="text-cyan-400 font-medium mb-4">
                        👋 Available for Junior Frontend / Full Stack Roles
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I'm{" "}
                        <span className="text-cyan-400">
                            Emon
                        </span>
                    </h1>

                    <h2 className="text-2xl mt-4 text-gray-300 font-semibold">
                        Aspiring Full Stack Developer
                    </h2>

                    <p className="mt-6 text-gray-400 leading-8 max-w-xl">
                        I enjoy building responsive, user-friendly web applications while
                        continuously learning modern technologies. I love solving problems,
                        creating projects, and turning ideas into reality through code.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">

                        <a
                            href="/resume.pdf"
                            className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
                        >
                            Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
                        >
                            Contact Me
                        </a>

                    </div>

                    {/* Tech Stack */}

                    <div className="flex flex-wrap gap-3 mt-10">

                        {[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "React",
                            "Tailwind CSS",
                            "TypeScript",
                            "Node.js",
                            "Express",
                            "MongoDB",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex justify-center">

                    <div className="relative">

                        <div className="w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl absolute"></div>

                        <div className="relative w-72 h-72 rounded-full border-4 border-cyan-400 overflow-hidden">
                            <img
                                src='https://ibb.co.com/8LPkVc4Q'
                                alt="Emon"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;