"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "City Guid Platform",
      role: "Frontend Developer",
      duration: "Sep 2024 – Jul 2025",
      description: `A web platform that enables users to explore services like restaurants, hospitals, schools, and clinics across Egypt. Features role-based dashboards for users, doctors, admins, and super admin.`,
      details: [
        "Designed responsive UI components using React.js and Tailwind CSS.",
        "Developed dashboards for content, orders, and role management.",
        "Implemented booking systems for doctors and food ordering.",
        "Used Next.js for routing and TypeScript for scalability and performance."
      ],
      tech: ["React", "Tailwind CSS", "Next.js", "TypeScript"],
      live: "https://graduation-project-nu-rosy.vercel.app/"
    },
    {
    title: "Restaurant Admin Panel",
    role: "Frontend Developer",
    duration: "May 2025 – Jul 2025",
    description: `An admin dashboard for managing restaurant content, products, categories, and orders.`,
    details: [
      "Built entire frontend using Next.js with TypeScript for scalable architecture.",
      "Used Context API for managing global state including user sessions and data.",
      "Designed modern UI with Tailwind CSS ensuring full responsiveness.",
      "Included features like add/edit/delete categories and dynamic dashboards."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Context API"],
    live: "https://restaurant-admin-tau-opal.vercel.app/"
},
{
  title: "General Admin – City Guid",
  role: "Frontend Developer",
  duration: "Jun 2025 – Jul 2025",
  description: `A centralized admin dashboard that controls the entire City Guid platform, including hospitals, schools, restaurants, doctors, and users.`,
  details: [
    "Built a robust admin panel using Next.js and TypeScript for high maintainability.",
    "Designed complex dashboards to manage different entities: hospitals, schools, restaurants, and user roles.",
    "Implemented access control and dynamic data rendering for multiple admin roles.",
    "Integrated Tailwind CSS for responsive and clean UI components."
  ],
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Context API"],
  live: "https://general-admin.vercel.app/"
},
    {
      title: "Codeverse Portfolio",
      role: "Frontend Developer",
      duration: "May 2025 – Jun 2025",
      description: `A modern portfolio website for Codeverse team to showcase services, projects, and values.`,
      details: [
        "Built full frontend with mobile-first responsiveness using React and Tailwind CSS.",
        "Integrated dynamic routing and SSR with Next.js for SEO and performance."
      ],
      tech: ["React", "Tailwind CSS", "Next.js"],
      live: "https://team-portfolio-mauve.vercel.app/"
    },
    {
      title: "MZ-Commerce",
      role: "Frontend Developer",
      duration: "Sep 2023 – Jan 2024",
      description: `An interactive ecommerce platform with product browsing, filtering, and cart features.`,
      details: [
        "Built UI with Tailwind CSS and core pages: Home, Product, Cart, Checkout.",
        "Managed global state using Redux and implemented real-time cart updates.",
        "Enabled product filtering and sorting by category and price.",
        "Used React Router for client-side navigation and reusable components."
      ],
      tech: ["React", "Tailwind CSS", "Redux", "Firebase"],
      live: "https://e-commerce-react-5ced2.web.app/"
    },


  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-xl font-bold text-orange-700 mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 italic mb-1">{project.role}</p>
              <p className="text-xs text-gray-500 mb-3">{project.duration}</p>

              <p className="text-gray-700 text-sm mb-3">{project.description}</p>

              <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                {project.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-orange-100 text-orange-800 px-2 py-1 text-xs rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-sm text-orange-700 hover:underline"
              >
                Live Demo <FaExternalLinkAlt className="ml-1" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
