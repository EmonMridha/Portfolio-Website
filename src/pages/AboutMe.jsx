import React from 'react';

const AboutMe = () => {
    return (
        <section
            id="about"
            className="relative py-24 px-6 bg-gradient-to-b from-[#090d1c] via-[#0d1228] to-[#101735] overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-0 top-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
                <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div>
                    <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-mono mb-3">
                        About Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Passionate About Building,
                        <span className="text-cyan-300"> Learning</span>, and
                        <span className="text-violet-300"> Growing</span>
                    </h2>

                    <p className="text-gray-300 leading-8 mb-6">
                        My interest in technology started during my childhood. I was always
                        curious about how software and digital products work, which eventually
                        led me to begin my programming journey in <span className="text-cyan-300 font-semibold">January 2025</span>.
                    </p>

                    <p className="text-gray-400 leading-8 mb-6">
                        Since then, I've been consistently learning web development and building
                        projects to strengthen my problem-solving skills. I enjoy turning ideas
                        into real applications and believe that every project teaches me
                        something new.
                    </p>

                    <p className="text-gray-400 leading-8">
                        Outside of programming, I enjoy reading books, playing games during my
                        leisure time, and staying active through fitness. I believe continuous
                        learning and self-improvement are essential both as a developer and as a
                        person.
                    </p>
                </div>

                {/* Right Side */}
                <div className="grid grid-cols-2 gap-5">

                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-cyan-400 transition">
                        <div className="text-3xl mb-4">💻</div>
                        <h3 className="text-white font-semibold mb-2">
                            Programming
                        </h3>
                        <p className="text-gray-400 text-sm leading-7">
                            Started coding in January 2025 and continuously learning by building
                            practical projects.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-violet-400 transition">
                        <div className="text-3xl mb-4">🚀</div>
                        <h3 className="text-white font-semibold mb-2">
                            Building Projects
                        </h3>
                        <p className="text-gray-400 text-sm leading-7">
                            I enjoy transforming ideas into responsive and user-friendly web
                            applications.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-amber-300 transition">
                        <div className="text-3xl mb-4">📚</div>
                        <h3 className="text-white font-semibold mb-2">
                            Learning
                        </h3>
                        <p className="text-gray-400 text-sm leading-7">
                            Reading books and exploring new technologies helps me grow every day.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-emerald-400 transition">
                        <div className="text-3xl mb-4">🏋️</div>
                        <h3 className="text-white font-semibold mb-2">
                            Fitness
                        </h3>
                        <p className="text-gray-400 text-sm leading-7">
                            I enjoy staying active and believe physical fitness supports mental
                            focus and productivity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;