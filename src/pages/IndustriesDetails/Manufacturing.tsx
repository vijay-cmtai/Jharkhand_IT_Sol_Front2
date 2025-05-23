// src/pages/industrydetails/ManufacturingDetailPage.tsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Zap,
  Layers,
  Cpu,
  BarChart3,
  ShieldCheck,
  ThumbsUp,
  Target,
  MessageSquare,
  HelpCircle,
  FileText,
  Users,
  Lightbulb,
  Award,
  ArrowRight,
  Factory, // Specific icon
} from "lucide-react";

import UnifiedNavbar from "../../components/UnifiedNavbar"; // Adjust path if needed
import Footer from "../../components/Footer"; // Adjust path if needed
import { Button } from "@/components/ui/button";
// import { AspectRatio } from "@/components/ui/aspect-ratio"; // Not used in this specific layout, can remove

// --- ANIMATION VARIANTS ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// --- PAGE SPECIFIC DATA ---
const industryInfo = {
  name: "Manufacturing & IoT",
  icon: Factory,
  tagline:
    "Engineering Smart Factories and Connected Ecosystems for Peak Manufacturing Performance and Efficiency.",
  imageUrl:
    "https://images.unsplash.com/photo-1560574128-39add1e0dba1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFudWZhY3R1cmluZyUyMGlvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80", // You can use your I7 import here
  overviewDescription:
    "We are dedicated to driving efficiency, innovation, and resilience in the manufacturing sector through Industry 4.0 solutions. Our expertise in the Internet of Things (IoT), Artificial Intelligence (AI), and data analytics helps manufacturers optimize production processes, significantly reduce operational costs, and build smarter, more responsive factories.",
  detailedPoints: [
    "We implement comprehensive Industrial IoT (IIoT) solutions for real-time monitoring, advanced control, and full automation of factory floor operations, leading to substantial improvements in Overall Equipment Effectiveness (OEE) and throughput.",
    "Our state-of-the-art predictive maintenance (PdM) systems leverage AI algorithms and extensive sensor data to accurately anticipate equipment failures, thereby minimizing unscheduled downtime, reducing repair costs, and extending the lifespan of critical assets.",
    "We develop robust supply chain visibility platforms that provide end-to-end tracking, granular insights, and predictive analytics, enabling better strategic planning, proactive risk management, and swift response to market disruptions.",
    "AI-driven quality control systems automate and enhance inspection processes using machine vision and deep learning, ensuring higher product quality standards, reducing defects, and minimizing waste.",
  ],
  keySolutions: [
    {
      title: "Industrial IoT (IIoT) Platforms",
      description:
        "Custom IIoT solutions for connecting machinery, sensors, and enterprise systems for real-time data acquisition, visualization, and control.",
      icon: Zap,
    },
    {
      title: "Predictive Maintenance (PdM)",
      description:
        "AI-powered systems to predict equipment failures, schedule maintenance proactively, optimize spare parts inventory, and reduce costly downtime.",
      icon: Cpu,
    },
    {
      title: "Smart Factory Automation",
      description:
        "Integration of robotics, automated guided vehicles (AGVs), and intelligent process automation to increase throughput and reduce manual labor.",
      icon: Layers,
    },
    {
      title: "Supply Chain Optimization",
      description:
        "End-to-end supply chain tracking, advanced analytics, and optimization solutions using IoT, AI, and potentially blockchain for enhanced transparency.",
      icon: BarChart3,
    },
    {
      title: "Digital Twin Technology",
      description:
        "Creating dynamic virtual replicas of physical assets, production lines, or entire factories for simulation, analysis, and operational optimization.",
      icon: Users,
    }, // Users icon can represent a 'digital human' or system replica
    {
      title: "AI for Quality Control (QC)",
      description:
        "Machine vision and AI algorithms for automated defect detection, precise quality assurance, and root cause analysis.",
      icon: ShieldCheck,
    },
    {
      title: "Energy Management Systems (EMS)",
      description:
        "IoT-based solutions for comprehensive monitoring, analysis, and optimization of energy consumption patterns in manufacturing plants.",
      icon: Lightbulb,
    },
    {
      title: "Worker Safety & Ergonomics",
      description:
        "Wearable IoT devices, environmental sensors, and AI-powered systems to enhance worker safety, monitor hazardous conditions, and improve ergonomics.",
      icon: Target,
    },
  ],
  challenges: [
    "Integrating legacy machinery and disparate systems with modern IIoT platforms.",
    "Managing, processing, and deriving actionable insights from vast amounts of industrial data.",
    "Ensuring robust cybersecurity for connected industrial control systems (ICS) and operational technology (OT).",
    "Addressing the skills gap and upskilling the workforce for Industry 4.0 technologies.",
    "Achieving seamless interoperability between various vendor systems and data formats.",
    "Managing the high initial investment costs and demonstrating clear ROI for smart factory initiatives.",
  ],
  benefits: [
    "Significant increase in operational efficiency, productivity (OEE), and asset utilization.",
    "Drastic reduction in unscheduled downtime, maintenance costs, and production losses.",
    "Improved product quality, consistency, and compliance with stringent standards, leading to fewer defects.",
    "Enhanced supply chain resilience, visibility, and responsiveness to market demands.",
    "Optimized resource utilization, including energy, raw materials, and human capital.",
    "Safer and more ergonomic working environments for factory personnel, reducing accidents.",
  ],
  relevantTechnologies: [
    "IoT Platforms (AWS IoT, Azure IoT Hub, Siemens MindSphere)",
    "Edge Computing",
    "AI/ML (Computer Vision, Anomaly Detection, NLP)",
    "Digital Twins (NVIDIA Omniverse, Ansys)",
    "MES/ERP Integration (SAP, Oracle)",
    "Cybersecurity (ICS/SCADA, IEC 62443)",
    "Robotics (ROS, PLC Programming)",
    "5G/LPWAN Connectivity",
  ],
  caseStudy: {
    title:
      "Smart Factory Transformation Achieves 25% OEE Increase for 'Precision Parts Inc.'",
    excerpt:
      "Discover how our comprehensive IIoT and AI-driven predictive maintenance solution significantly increased Overall Equipment Effectiveness (OEE) by 25% and reduced critical machinery downtime by 40% for Precision Parts Inc., a leading automotive component manufacturer.",
    link: "/case-studies/precision-parts-smart-factory-iot", // Example link
  },
};

const ManufacturingDetailPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const IndustryIcon = industryInfo.icon;

  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen antialiased flex flex-col">
      <UnifiedNavbar />
      <main className="flex-grow">
        {/* --- BANNER SECTION --- */}
        <motion.section
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 text-white overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute inset-0 z-0">
            <img
              src={industryInfo.imageUrl} // Use I7 if imported: src={I7}
              alt={`${industryInfo.name} industry background`}
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/70 to-sky-900/30"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="mb-4">
                <IndustryIcon className="w-16 h-16 text-cyan-400 mx-auto" />
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500"
              >
                {industryInfo.name}
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
              >
                {industryInfo.tagline}
              </motion.p>
              <motion.div variants={fadeIn} className="mt-8">
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
                >
                  Optimize Your Manufacturing{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* --- LEFT/MAIN CONTENT AREA --- */}
            <motion.div className="lg:col-span-8 space-y-16" variants={fadeIn}>
              {/* Overview Section */}
              <motion.section variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-3 border-b-2 border-cyan-500/40 flex items-center">
                  <Layers className="w-8 h-8 mr-3 text-cyan-400" />
                  Revolutionizing {industryInfo.name}
                </h2>
                <div className="prose prose-lg prose-invert max-w-none text-slate-300/90 leading-relaxed space-y-5">
                  <p>{industryInfo.overviewDescription}</p>
                  {industryInfo.detailedPoints.map((point, index) => (
                    <p key={index}>{point}</p>
                  ))}
                </div>
              </motion.section>

              {/* Key Solutions Section */}
              <motion.section variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 pb-3 border-b-2 border-cyan-500/40 flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-cyan-400" /> Our Key{" "}
                  {industryInfo.name.split("&")[0].trim()} Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {industryInfo.keySolutions.map((solution, index) => {
                    const SolutionIcon = solution.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="bg-slate-800/60 border border-slate-700/70 rounded-xl p-6 shadow-lg hover:border-cyan-500/60 transition-colors"
                      >
                        <div className="flex items-center mb-3">
                          <SolutionIcon className="w-7 h-7 text-emerald-400 mr-3 shrink-0" />
                          <h3 className="text-xl font-semibold text-cyan-300">
                            {solution.title}
                          </h3>
                        </div>
                        <p className="text-sm text-slate-400/90 leading-relaxed">
                          {solution.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>

              {/* Challenges & Benefits Section */}
              <motion.section
                variants={fadeIn}
                className="grid md:grid-cols-2 gap-10"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-red-500/40 flex items-center">
                    <Target className="w-7 h-7 mr-3 text-red-400" />{" "}
                    Manufacturing Hurdles We Overcome
                  </h2>
                  <ul className="space-y-3">
                    {industryInfo.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        variants={fadeIn}
                        className="flex items-start"
                      >
                        <CheckCircle className="w-5 h-5 text-red-400/80 mr-2.5 mt-1 shrink-0" />
                        <span className="text-slate-300">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-emerald-500/40 flex items-center">
                    <ThumbsUp className="w-7 h-7 mr-3 text-emerald-400" />{" "}
                    Tangible Benefits We Provide
                  </h2>
                  <ul className="space-y-3">
                    {industryInfo.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        variants={fadeIn}
                        className="flex items-start"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-400/80 mr-2.5 mt-1 shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Case Study Teaser Section */}
              {industryInfo.caseStudy && (
                <motion.section variants={fadeIn}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 pb-3 border-b-2 border-cyan-500/40 flex items-center">
                    <FileText className="w-8 h-8 mr-3 text-cyan-400" /> Success
                    in {industryInfo.name.split("&")[0].trim()}
                  </h2>
                  <div className="bg-gradient-to-r from-sky-800/30 to-emerald-800/30 p-8 rounded-xl shadow-xl border border-sky-700/50">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {industryInfo.caseStudy.title}
                    </h3>
                    <p className="text-slate-300/90 mb-6 leading-relaxed">
                      {industryInfo.caseStudy.excerpt}
                    </p>
                    <Button
                      asChild
                      className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
                    >
                      <Link to={industryInfo.caseStudy.link}>
                        Explore the Transformation{" "}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.section>
              )}
            </motion.div>

            {/* --- RIGHT SIDEBAR --- */}
            <motion.aside
              className="lg:col-span-4 space-y-10 sticky top-24 self-start"
              variants={fadeIn}
            >
              <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-5 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3 text-cyan-400" /> Why Us
                  for Industry 4.0?
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-400">
                  {[
                    "Deep IIoT & automation expertise.",
                    "Strong focus on OT/ICS cybersecurity.",
                    "Scalable and future-proof smart factory solutions.",
                    "Data-driven approach for operational insights.",
                    "End-to-end project management and support.",
                  ].map((point, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-600/70 to-sky-600/80 p-8 rounded-xl border border-sky-500/50 text-center shadow-2xl backdrop-blur-sm">
                <MessageSquare className="w-12 h-12 text-sky-200 mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Build Your Smart Factory?
                </h3>
                <p className="text-sky-100/90 mb-6 text-sm">
                  Let's discuss how our Industry 4.0 solutions can transform
                  your manufacturing operations for enhanced productivity and a
                  competitive edge.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-sky-700 hover:bg-sky-100 font-semibold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-sky-300"
                >
                  <Link to="/contact">Schedule a Demo</Link>
                </Button>
              </div>

              <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-5 flex items-center">
                  <Cpu className="w-6 h-6 mr-3 text-cyan-400" /> Key
                  Manufacturing Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industryInfo.relevantTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ManufacturingDetailPage;
