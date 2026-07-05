import React from 'react';

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-[#101735] via-[#0b1124] to-[#090d1c]"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="font-mono uppercase tracking-[0.3em] text-cyan-300 text-sm">
                        Skills
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                        Technologies I Work With
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
                        I'm continuously improving my skills by building real-world projects,
                        reading documentation, and exploring modern web technologies.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {/* HTML */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:border-orange-400 hover:-translate-y-2 transition duration-300">
                        <div className="text-5xl mb-5">🌐</div>

                        <h3 className="text-white font-semibold text-lg">HTML</h3>

                        <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[95%] bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                        </div>

                        <p className="mt-2 text-sm text-gray-400">95%</p>
                    </div>

                    {/* CSS / Tailwind */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
                        <div className="text-5xl mb-5">🎨</div>

                        <h3 className="text-white font-semibold text-lg">
                            Tailwind CSS
                        </h3>

                        <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[90%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                        </div>

                        <p className="mt-2 text-sm text-gray-400">90%</p>
                    </div>

                    {/* JavaScript */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:border-yellow-400 hover:-translate-y-2 transition duration-300">
                        <div className="text-5xl mb-5">⚡</div>

                        <h3 className="text-white font-semibold text-lg">
                            JavaScript
                        </h3>

                        <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[85%] bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"></div>
                        </div>

                        <p className="mt-2 text-sm text-gray-400">85%</p>
                    </div>

                    {/* React */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:border-sky-400 hover:-translate-y-2 transition duration-300">
                        <div className="text-5xl mb-5">⚛️</div>

                        <h3 className="text-white font-semibold text-lg">
                            React
                        </h3>

                        <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[80%] bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full"></div>
                        </div>

                        <p className="mt-2 text-sm text-gray-400">80%</p>
                    </div>

                    {/* TypeScript */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
                        <div className="text-5xl mb-5">🔷</div>

                        <h3 className="text-white font-semibold text-lg">
                            TypeScript
                        </h3>

                        <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[60%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                        </div>

                        <p className="mt-2 text-sm text-gray-400">60%</p>
                    </div>

                    {/* Node */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:border-green-400 hover:-translate-y-2 transition duration-300">
                        <div className="text-5xl mb-5">🟢</div>

                        <h3 className="text-white font-semibold text-lg">
                            Node.js
                        </h3>

                        <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[70%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                        </div>

                        <p className="mt-2 text-sm text-gray-400">70%</p>
                    </div>

                    {/* Express */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:border-gray-300 hover:-translate-y-2 transition duration-300">
                        <div className="text-5xl mb-5">🚀</div>

                        <h3 className="text-white font-semibold text-lg">
                            Express.js
                        </h3>

                        <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[65%] bg-gradient-to-r from-gray-300 to-white rounded-full"></div>
                        </div>

                        <p className="mt-2 text-sm text-gray-400">65%</p>
                    </div>

                    {/* MongoDB */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:border-emerald-400 hover:-translate-y-2 transition duration-300">
                        <div className="text-5xl mb-5">🍃</div>

                        <h3 className="text-white font-semibold text-lg">
                            MongoDB
                        </h3>

                        <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[65%] bg-gradient-to-r from-emerald-400 to-green-600 rounded-full"></div>
                        </div>

                        <p className="mt-2 text-sm text-gray-400">65%</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Skills;