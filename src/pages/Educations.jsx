import React from 'react';

const Educations = () => {
    return (
        <section
            id="education"
            className="py-24 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-medium">
                        Education
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        My Academic Journey
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
                        My education has helped build the foundation for my programming
                        journey. Alongside my studies, I continue to learn modern web
                        development by building projects and exploring new technologies.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">

                    {/* Vertical Line */}
                    <div className="absolute left-5 top-0 bottom-0 w-1 bg-cyan-400/30 rounded-full"></div>

                    {/* HSC */}
                    <div className="relative pl-16 pb-14">
                        <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold">
                            🎓
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
                            <span className="text-cyan-400 text-sm font-medium">
                                Completed
                            </span>

                            <h3 className="text-2xl font-semibold mt-2">
                                Higher Secondary Certificate (HSC)
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                Successfully completed Higher Secondary Certificate (HSC),
                                strengthening my academic foundation before pursuing higher
                                education.
                            </p>
                        </div>
                    </div>

                    {/* Current Study */}
                    <div className="relative pl-16">
                        <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-violet-400 flex items-center justify-center text-black font-bold">
                            📖
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-400 transition">
                            <span className="text-violet-300 text-sm font-medium">
                                Present
                            </span>

                            <h3 className="text-2xl font-semibold mt-2">
                                Undergraduate Student
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                Currently studying in the second year of my undergraduate
                                program in mathematics while continuously improving my software development
                                skills through self-learning and hands-on projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Educations;