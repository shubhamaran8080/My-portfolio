import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Paintbrush, Database } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = (
  { title, description, icon }: ServiceCardProps = {
    title: "Service Title",
    description:
      "Service description goes here. This explains what the service entails and its benefits.",
    icon: <Code className="h-8 w-8" />,
  },
) => {
  return (
    <Card className="bg-[#121222] border-none overflow-hidden relative group transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-x-0 h-[2px] top-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      <CardHeader className="pb-2">
        <div className="text-purple-400 mb-2">{icon}</div>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Custom web applications built using HTML, CSS, JavaScript, and React. I focus on creating responsive, user-friendly, and high-performing websites with modern frameworks like Tailwind CSS, Bootstrap, and Chakra UI.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: "Web Design & UI Development",
      description:
        "Designing clean, creative, and responsive user interfaces that enhance engagement. Skilled in UI frameworks (Tailwind, Chakra UI, Material UI) to deliver sleek, brand-consistent designs across devices.",
      icon: <Paintbrush className="h-8 w-8" />,
    },
    {
      title: "Database-Driven Solutions",
      description:
        "Building and integrating MySQL & PostgreSQL databases with applications. Writing optimized queries and managing structured data for business insights.",
      icon: <Database className="h-8 w-8" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#0a0a1a]" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          MY SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
