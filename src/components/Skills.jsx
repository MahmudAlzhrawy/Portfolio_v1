"use client";
import { motion } from "framer-motion";

export default function Skills() {
const skills = [
{
    title: "FrontEnd Development",
    skills: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 90 },
    { name: "Redux", level: 80 },
    { name: "Next.js", level: 85 }
    ]
},
{
    title: "BackEnd Development",
    skills: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 }
    ]
},
{
    title: "Database Management",
    skills: [
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 65 }
    ]
},
{
    title: "Soft Skills",
    skills: [
    { name: "Problem Solving", level: 90 },
    { name: "Teamwork", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Time Management", level: 85 }
    ]
},
{
    title: "Others",
    skills: [
    { name: "Git", level: 85 },
    { name: "Vercel", level: 80 },
    { name: "Firebase Services", level: 75 },
    { name: "RESTful APIs", level: 85 },
    { name: "Data Structures", level: 90 },
    { name: "Algorithms", level: 85 },
    { name: "Responsive Design", level: 95 },
    { name: "Web Accessibility", level: 80 },
    { name: "Cross-Browser Compatibility", level: 85 }
    ]
}
];

return (
<section className="py-12 px-6 max-w-full mx-auto">

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {skills.map((category, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-md w-full rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
        <h3 className="text-xl font-semibold mb-4 text-orange-700">
            {category.title}
        </h3>

        <div className="space-y-4">
            {category.skills.map((skill, idx) => (
            <div key={idx}>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-3 bg-orange-500 rounded-full"
                />
                </div>
            </div>
            ))}
        </div>
        </motion.div>
    ))}
    </div>
</section>
);
}
