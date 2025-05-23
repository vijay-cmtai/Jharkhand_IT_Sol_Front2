import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Techstack from "../assets/TechStack.avif";
// Assuming MainNavbar and Footer are handled by a global Layout component
// import  MainNavbar  from "@/components/MainNavbar";
// import Footer from "@/components/Footer"

const TechnologyShowcase = () => {
  const technologies = [
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png",
      name: "React",
      description: "Frontend library for building user interfaces",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      name: "Next.js",
      description: "React framework for production",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-angular-3-226070.png",
      name: "Angular",
      description: "Platform for building mobile & desktop web apps",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png",
      name: "Vue.js",
      description: "Progressive JavaScript framework",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1-1174935.png",
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png",
      name: "TypeScript",
      description: "Typed superset of JavaScript",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png",
      name: "Python",
      description: "Programming language for web and data science",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png",
      name: "Java",
      description: "Object-oriented programming language",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    // Removed fragment and MainNavbar/Footer, assuming they are in a global Layout
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technologies We Master
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            We leverage a robust stack of modern technologies to build
            innovative, scalable, and high-performance digital solutions.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Tech Grid */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  // Add group-hover:z-30 to bring the hovered card and its tooltip to the front
                  // The non-hovered items will have a default z-index or a lower one.
                  // Also ensure the parent grid doesn't create a restrictive stacking context without z-index.
                  className="group relative hover:z-30" // Added hover:z-30
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Card Content */}
                  <div className="bg-slate-800 p-5 rounded-xl w-full h-40 sm:h-44 flex flex-col items-center justify-center text-center shadow-xl hover:shadow-cyan-500/25 border border-slate-700 hover:border-cyan-500/70 transition-all duration-300">
                    {" "}
                    {/* Adjusted h-44 to be consistent */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-3 sm:mb-4" // Made icon size slightly responsive
                    />
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      {" "}
                      {/* Made text size slightly responsive */}
                      {tech.name}
                    </h3>
                  </div>

                  {/* Tooltip - Keep z-20, its parent's z-index on hover is what matters more */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[calc(100%+10px)] w-56 bg-slate-700 rounded-lg shadow-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 group-hover:delay-75">
                    {" "}
                    {/* Increased padding, shadow, slightly reduced translate-y, added delay */}
                    <div className="text-base font-semibold text-white mb-1.5">
                      {" "}
                      {/* Increased font size */}
                      {tech.name}
                    </div>
                    <div className="text-xs text-gray-200 leading-normal">
                      {" "}
                      {/* Brighter text, adjusted leading */}
                      {tech.description}
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-slate-700 rotate-45"></div>{" "}
                    {/* Adjusted arrow size and position */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/30 h-full min-h-[350px] md:min-h-full">
              {" "}
              {/* Ensure min-height for image container */}
              <img
                src={Techstack}
                alt="Modern Web Development Technology Stack"
                className="w-full h-full object-cover"
                loading="lazy" // Added lazy loading
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Cutting-Edge Stack
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Building robust, scalable, and future-proof digital
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/FullTechStack" // Corrected from "/FullTechStack" to common convention
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Full Tech Stack
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
