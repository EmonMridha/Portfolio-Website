import React from 'react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-[#141035] via-[#0d1228] to-[#090d1c]"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-violet-500/10 blur-3xl"></div>
            </div>

            <div className="relative max-w-5xl mx-auto text-center">

                <span className="text-cyan-300 font-mono text-sm tracking-widest uppercase">
                    Contact
                </span>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                    Let's Build Something Great Together
                </h2>

                <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">
                    Whether you have a project, an internship opportunity, or simply want to
                    connect, feel free to reach out through any of the platforms below.
                </p>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-5">

                    <a
                        href="https://github.com/EmonMridha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                    >
                        <h3 className="text-white font-semibold">GitHub</h3>
                        <p className="text-sm text-gray-400 mt-2">View Code</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/emon-mridha-598301312/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                    >
                        <h3 className="text-white font-semibold">LinkedIn</h3>
                        <p className="text-sm text-gray-400 mt-2">Professional</p>
                    </a>

                    <a
                        href="https://x.com/emon61993"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                    >
                        <h3 className="text-white font-semibold">X</h3>
                        <p className="text-sm text-gray-400 mt-2">Follow Me</p>
                    </a>

                    <a
                        href="mailto:emonmridha712@gmail.com"
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                    >
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-sm text-gray-400 mt-2">emonmridha712@gmail.com</p>
                    </a>

                    <a
                        href="https://www.facebook.com/emon.mridha.842030"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                    >
                        <h3 className="text-white font-semibold">Facebook</h3>
                        <p className="text-sm text-gray-400 mt-2">Connect</p>
                    </a>
                    <a
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                    >
                        <h3 className="text-white font-semibold">Phone</h3>
                        <p className="text-sm text-gray-400 mt-2">01864154680</p>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Contact;