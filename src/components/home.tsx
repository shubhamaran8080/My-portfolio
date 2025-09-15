import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram, Linkedin, Mail,Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import ContactForm from "./ContactForm";


const Home = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Skills data
  const skills = [
    { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg", color: "bg-red-500" },
    { name: "CSS", icon: "/icons/css-3-svgrepo-com.svg", color: "bg-violet-500" },
    { name: "JavaScript", icon: "/icons/javascript.svg", color: "bg-pink-400" },
    { name: "React", icon: "/icons/reactjs.svg", color: "bg-yellow-400" },
    { name: "Sql", icon: "/My-portfolio/icons/sql.svg", color: "bg-red-500" },
    { name: "GitHub", icon: "/icons/github.svg", color: "bg-orange-700" },
    { name: "Tailwind", icon: "/icons/tailwind.svg", color: "bg-yellow-600" },
    { name: "MySql", icon: "/icons/mysql.svg", color: "bg-purple-500" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg", color: "bg-green-600" },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d1117]/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Shubham Aran
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-purple-400 transition-colors">
              Home
            </a>
            <a
              href="#services"
              className="hover:text-purple-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#skills"
              className="hover:text-purple-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="hover:text-purple-400 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button placeholder */}
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden"
      >
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                FRONTEND DEVELOPER
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                I'm Shubham Aran, a frontend developer with a passion for
                creating modern and responsive websites.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-2 rounded-full">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              className="md:w-2/5"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md"></div>
                <img
                  src="/images/shubham.JPG"
                  alt="Shubham Aran - Professional Portrait"
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-gray-800"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-[#0a0d14]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MY SERVICES</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <ServicesSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 relative">
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SKILLS</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-gray-400">
              The skills, tools and technologies I use:
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-[#161b22] border-gray-800 hover:border-purple-500 transition-all duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${skill.color}`}
                  >
                    <img
                     src={skill.icon}
  alt={skill.name}
  className="w-6 h-6"

                    />
                  </div>
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-[#0a0d14]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">PORTFOLIO</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <PortfolioSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 relative">
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              DO YOU HAVE A PROJECT TO DISCUSS?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="mt-6 text-gray-400">GET IN TOUCH</p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              className="md:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-[#161b22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-6">CONTACT</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-purple-400" />
                    <a
                      href="mailto:contact@shubhamaran.com"
                      className="hover:text-purple-400 transition-colors"
                    >
                      shubham8080m@gmail.com
                    </a>
                  </p>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-6">SOCIAL MEDIA</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/shubham-aran-8b758b2a6/"
                    className="bg-[#0d1117] p-3 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/shubhamaran8080"
                    className="bg-[#0d1117] p-3 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.naukri.com/mnjuser/profile"
                    className="bg-[#0d1117] p-3 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <Briefcase className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0d14] border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Shubham Aran. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
