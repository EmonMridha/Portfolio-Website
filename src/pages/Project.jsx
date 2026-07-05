import React from 'react';
import { useParams } from 'react-router';
import projects from '../projectsData';

const Project = () => {
    const {id} = useParams();
    const project = projects.find(
  (p) => p.id === Number(id)
);
    return (
        <section className="min-h-screen bg-gradient-to-b from-slate-950 via-[#0d1228] to-black text-white py-20 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Project Image */}

                <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                    <img
                        src="https://placehold.co/1200x700/0f172a/ffffff?text=Project+Screenshot"
                        alt="Project"
                        className="w-full object-cover"
                    />
                </div>

                {/* Project Info */}

                <div className="mt-12">

                    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
                        Featured Project
                    </p>

                    <h1 className="mt-3 text-5xl font-bold">
                        {project.name}
                    </h1>

                    <p className="mt-6 text-gray-400 leading-8 max-w-4xl">
                      {project.description}
                    </p>
                    <p className="mt-6 text-gray-400 leading-8 max-w-4xl">
                      Challenges I faced: {project.challenges}
                    </p>
                    <p className="mt-6 text-gray-400 leading-8 max-w-4xl">
                      Potential Improvements for future: {project.improvements}
                    </p>

                </div>

                {/* Tech Stack */}

                <div className="mt-14">

                    <h2 className="text-2xl font-semibold mb-6">
                        Tech Stack
                    </h2>

                    <div className="flex flex-wrap gap-4">

                        {[
                            "React",
                            "Tailwind CSS",
                            "JavaScript",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                </div>

                {/* Features */}

                <div className="mt-14">

                    <h2 className="text-2xl font-semibold mb-6">
                        Key Features
                    </h2>

                    <ul className="space-y-3 text-gray-300 list-disc list-inside">

                        <li>User authentication</li>

                        <li>Responsive design</li>

                        <li>Product search & filtering</li>

                        <li>Shopping cart functionality</li>

                        <li>REST API integration</li>

                        <li>MongoDB database</li>

                    </ul>

                </div>

                {/* Buttons */}

                <div className="mt-16 flex flex-wrap gap-5">

                    <a
                        href="#"
                        className="px-7 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
                    >
                        🌐 Live Demo
                    </a>

                    <a
                        href="#"
                        className="px-7 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition"
                    >
                        💻 GitHub Repository
                    </a>

                </div>

            </div>

        </section>
    );
};

export default Project;