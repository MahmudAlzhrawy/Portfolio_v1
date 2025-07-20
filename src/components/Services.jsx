'use client'
import Card from "@/UI/Card";
import { motion } from "framer-motion";

export default function Services() {
    const services = [
        { id: 1, title: "Web Design", description: "Creating visually appealing and user-friendly website layouts." },
        { id: 2, title: "Web Development", description: "Building robust and scalable web applications." },
        { id: 3, title: "SEO", description: "Optimizing websites to rank higher in search engine results." },   
        { id: 4, title: "E-commerce Solutions", description: "Developing online stores with secure payment gateways." }
    ];
 return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <Card className="mb-4">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
