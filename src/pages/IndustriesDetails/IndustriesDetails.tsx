// src/pages/industrydetails/HealthcareDetailPage.tsx
// Create a new folder 'industrydetails' inside 'pages' for better organization

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
  HeartPulse, // Specific icon for this page
} from "lucide-react";

import UnifiedNavbar from "../../components/UnifiedNavbar"; // Adjusted path
import Footer from "../../components/Footer"; // Adjusted path
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// --- ANIMATION VARIANTS (Can be shared or defined per page) ---
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
  name: "Healthcare & Life Sciences",
  icon: HeartPulse,
  tagline:
    "Pioneering Digital Transformation in Healthcare for Enhanced Patient Outcomes.",
  imageUrl:
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
  overviewDescription:
    "We are dedicated to empowering healthcare providers and life science organizations with innovative technology. Our mission is to improve patient outcomes, streamline complex operations, and accelerate critical research through secure, compliant, and scalable digital solutions specifically tailored to the unique demands of the modern healthcare industry.",
  detailedPoints: [
    "Our commitment involves a multi-faceted approach, leveraging AI, IoT, and data analytics to address critical sector challenges.",
    "From enhancing diagnostic accuracy with AI-powered tools to enabling remote patient care via robust telemedicine platforms, our solutions prioritize interoperability, security, and user-friendliness.",
    "We possess a deep understanding of the stringent regulatory environment (e.g., HIPAA, HITECH, GDPR) and ensure all our solutions meet the highest standards of data privacy and security.",
    "We aim to foster a more connected, efficient, and patient-centric healthcare ecosystem through continuous innovation.",
  ],
  keySolutions: [
    {
      title: "EHR/EMR Systems",
      description:
        "Custom development, integration, and optimization of Electronic Health/Medical Record systems for seamless data management.",
      icon: FileText,
    },
    {
      title: "Telemedicine Platforms",
      description:
        "Secure and scalable platforms for remote consultations, patient monitoring, and virtual care delivery.",
      icon: MessageSquare,
    },
    {
      title: "AI in Diagnostics",
      description:
        "AI-powered medical imaging analysis and diagnostic support tools to improve accuracy and speed.",
      icon: Cpu,
    },
    {
      title: "Patient Engagement",
      description:
        "Interactive patient portals, mobile health apps, and digital tools to enhance patient involvement in their care.",
      icon: Users,
    },
    {
      title: "Regulatory Compliance",
      description:
        "Solutions and consultancy to meet HIPAA, GDPR, HITECH, and other healthcare data regulations.",
      icon: ShieldCheck,
    },
    {
      title: "Clinical Trial Tech",
      description:
        "Software for efficient clinical trial management, data collection, and research acceleration.",
      icon: Layers,
    },
    {
      title: "Healthcare Analytics",
      description:
        "Big data analytics and business intelligence for population health management and operational insights.",
      icon: BarChart3,
    },
    {
      title: "IoT & Smart Hospitals",
      description:
        "Implementing IoT for smart medical devices, wearables, and connected hospital environments.",
      icon: Zap,
    },
  ],
  challenges: [
    "Fragmented data systems hindering interoperability.",
    "Increasing regulatory complexities and compliance burdens.",
    "Need for enhanced patient engagement and personalized care.",
    "Rising operational costs and demand for efficiency.",
    "Ensuring robust data security and patient privacy (PHI).",
    "Integrating new technologies into existing clinical workflows.",
  ],
  benefits: [
    "Improved patient outcomes via data-driven insights.",
    "Enhanced operational efficiency and reduced administrative tasks.",
    "Greater accessibility to care, especially for remote areas.",
    "Streamlined research and development cycles for new treatments.",
    "Robust security and unwavering compliance adherence.",
    "Empowered patients through better information access.",
  ],
  relevantTechnologies: [
    "AI/ML",
    "Cloud (AWS, Azure, GCP)",
    "IoT",
    "Big Data",
    "FHIR/HL7",
    "Telehealth SDKs",
    "Cybersecurity",
    "Blockchain",
  ],
  caseStudy: {
    title: "Transforming Patient Care at City General Hospital",
    excerpt:
      "Discover how our integrated digital health platform revolutionized patient management, reduced wait times by 30%, and improved diagnostic accuracy at City General Hospital.",
    link: "/case-studies/city-general-hospital-healthcare", // Example link
  },
};

const HealthcareDetailPage: React.FC = () => {
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
              src={industryInfo.imageUrl}
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
                  Discuss Your Healthcare Project{" "}
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
                  Advancing {industryInfo.name}
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
                  {industryInfo.name} Solutions
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
                    <Target className="w-7 h-7 mr-3 text-red-400" /> Challenges
                    We Address
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
                    Benefits of Our Solutions
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
                    in {industryInfo.name}
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
                        Read Full Case Study{" "}
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
                  for {industryInfo.name.split(" ")[0]}?
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-400">
                  {[
                    "Deep industry-specific expertise.",
                    "Focus on regulatory compliance & security.",
                    "Scalable and future-proof solutions.",
                    "Agile development & collaborative approach.",
                    "Proven track record of successful delivery.",
                    "Commitment to innovation & patient-centricity.",
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
                  Ready to Innovate in {industryInfo.name}?
                </h3>
                <p className="text-sky-100/90 mb-6 text-sm">
                  Let's discuss how our tailored{" "}
                  {industryInfo.name.toLowerCase()} solutions can address your
                  specific challenges and drive growth.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-sky-700 hover:bg-sky-100 font-semibold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-sky-300"
                >
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
              </div>

              <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-5 flex items-center">
                  <Cpu className="w-6 h-6 mr-3 text-cyan-400" /> Technologies We
                  Leverage
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
      <Footer />
    </div>
  );
};

export default HealthcareDetailPage;
