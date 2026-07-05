import { Link } from "react-router";

const Projects = () => {
    const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "/images/portfolio.png",

    description:
      "A responsive portfolio website built using React and Tailwind CSS to showcase my skills, projects, and contact information.",

    techStack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],

    features: [
      "Responsive design",
      "Dark theme",
      "Project showcase",
      "Contact section",
      "Smooth navigation",
    ],

    challenges: [
      "Designing a responsive layout that works well on all screen sizes.",
      "Creating a modern UI while keeping the code clean and maintainable.",
      "Organizing reusable React components.",
    ],

    improvements: [
      "Add dark/light mode toggle.",
      "Implement animations using Framer Motion.",
      "Add multilingual support.",
    ],

    futurePlans: [
      "Integrate a blog section.",
      "Add CMS support for managing projects.",
      "Optimize performance and SEO.",
    ],

    github: "https://github.com/yourname/portfolio",

    live: "https://portfolio.vercel.app",
  },

  {
    id: 2,
    name: "Task Manager",
    image: "/images/task.png",

    description:
      "A full-stack task management application that allows users to create, edit, organize, and delete tasks.",

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    features: [
      "User authentication",
      "CRUD operations",
      "Task categories",
      "Responsive dashboard",
      "REST API",
    ],

    challenges: [
      "Managing application state efficiently.",
      "Designing RESTful API routes.",
      "Connecting frontend with backend securely.",
    ],

    improvements: [
      "Add drag-and-drop task organization.",
      "Implement notifications and reminders.",
      "Support collaborative workspaces.",
    ],

    futurePlans: [
      "Add calendar integration.",
      "Implement real-time updates using WebSockets.",
      "Develop a mobile version.",
    ],

    github: "https://github.com/yourname/task",

    live: "https://task.vercel.app",
  },

  {
    id: 3,
    name: "E-Commerce Website",
    image: "/images/shop.png",

    description:
      "A modern e-commerce platform where users can browse products, manage their cart, and place orders.",

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    features: [
      "Product catalog",
      "Shopping cart",
      "User authentication",
      "Search and filtering",
      "Responsive design",
    ],

    challenges: [
      "Designing the database schema.",
      "Managing shopping cart state.",
      "Implementing secure authentication.",
    ],

    improvements: [
      "Integrate online payment gateways.",
      "Add product reviews and ratings.",
      "Implement an admin dashboard.",
    ],

    futurePlans: [
      "Add order tracking.",
      "Implement recommendation system.",
      "Support multiple languages and currencies.",
    ],

    github: "https://github.com/yourname/shop",

    live: "https://shop.vercel.app",
  },
];

    return (
        <section
            id="projects"
            className="py-24 px-6 bg-gradient-to-b from-[#090d1c] via-[#0d1228] to-[#101735]"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-medium">
                        My Projects
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                        Featured Projects
                    </h2>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">
                        These are some of the projects I've built while learning modern web
                        development. Each project helped me improve my problem-solving and
                        programming skills.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-2xl font-semibold text-white">
                                    {project.name}
                                </h3>

                                <Link to={`/projects/${project.id}`}>
                                    <button className="mt-6 w-full bg-cyan-400 text-slate-900 font-semibold py-3 rounded-xl hover:bg-cyan-300 transition">
                                        View More
                                    </button>
                                </Link>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;