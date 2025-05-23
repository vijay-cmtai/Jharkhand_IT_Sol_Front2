import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Laptop,
  Handshake,
  ArrowRight,
  MapPin,
  Clock,
  TrendingUp,
  FileText,
  Search,
  Send,
} from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";

const Career = () => {
  const navigate = useNavigate();

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const cardHoverEffect = {
    y: -8,
    boxShadow: "0px 10px 25px rgba(0, 200, 200, 0.2)",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  };

  const benefits = [
    {
      icon: <Laptop className="text-jis-green w-10 h-10" />,
      title: "Innovative Work",
      description:
        "Work on cutting-edge projects using the latest technologies.",
    },
    {
      icon: <FaUserGraduate className="text-jis-teal w-10 h-10" />,
      title: "Learning & Growth",
      description:
        "Continuous learning opportunities and career advancement paths.",
    },
    {
      icon: <Handshake className="text-jis-blue w-10 h-10" />,
      title: "Collaborative Culture",
      description:
        "Supportive team environment that values diverse perspectives.",
    },
    {
      icon: <Briefcase className="text-jis-yellow w-10 h-10" />,
      title: "Competitive Benefits",
      description:
        "Attractive compensation and benefits package for all employees.",
    },
  ];

  const jobOpenings = [
    {
      id: "senior-react-developer",
      title: "Senior React Developer",
      details: [
        {
          icon: <Clock size={16} className="text-jis-green/80" />,
          text: "Full-time",
        },
        {
          icon: <MapPin size={16} className="text-jis-blue/80" />,
          text: "Ranchi (Remote Option)",
        },
        {
          icon: <TrendingUp size={16} className="text-jis-teal/80" />,
          text: "3+ years exp.",
        },
      ],
      description:
        "Lead the development of high-performance web applications using React and modern frontend technologies.",
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      details: [
        {
          icon: <Clock size={16} className="text-jis-green/80" />,
          text: "Full-time",
        },
        {
          icon: <MapPin size={16} className="text-jis-blue/80" />,
          text: "Ranchi, Jharkhand",
        },
        {
          icon: <TrendingUp size={16} className="text-jis-teal/80" />,
          text: "2+ years exp.",
        },
      ],
      description:
        "Craft intuitive and visually appealing user interfaces and experiences for web and mobile platforms.",
    },
    {
      id: "android-developer",
      title: "Android Developer",
      details: [
        {
          icon: <Clock size={16} className="text-jis-green/80" />,
          text: "Full-time",
        },
        {
          icon: <MapPin size={16} className="text-jis-blue/80" />,
          text: "Hybrid (Ranchi)",
        },
        {
          icon: <TrendingUp size={16} className="text-jis-teal/80" />,
          text: "2-5 years exp.",
        },
      ],
      description:
        "Develop and maintain high-quality Android applications, ensuring responsiveness and performance.",
    },
    {
      id: "digital-marketing-specialist",
      title: "Digital Marketing Specialist",
      details: [
        {
          icon: <Clock size={16} className="text-jis-green/80" />,
          text: "Full-time",
        },
        {
          icon: <MapPin size={16} className="text-jis-blue/80" />,
          text: "Remote",
        },
        {
          icon: <TrendingUp size={16} className="text-jis-teal/80" />,
          text: "1-3 years exp.",
        },
      ],
      description:
        "Plan and execute digital marketing campaigns, including SEO/SEM, email, social media, and display advertising.",
    },
  ];

  const handleApplyNow = (jobId, jobTitle) => {
    navigate(`/careers/apply/${jobId}?title=${encodeURIComponent(jobTitle)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-gray-200 antialiased">
      <motion.main
        className="flex-grow"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-jis-teal/70 via-jis-blue/60 to-jis-green/70 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <motion.div
            className="container mx-auto px-4 relative z-10"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_3px_8px_rgba(0,200,200,0.3)]"
              >
                Join Our Visionary Team
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-200/90 mb-10 drop-shadow-sm max-w-2xl mx-auto"
              >
                Build your career with a passionate team dedicated to innovation
                and shaping the future of technology.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="inline-block p-0.5 rounded-xl bg-gradient-to-br from-jis-green via-jis-teal to-jis-blue shadow-2xl shadow-jis-teal/30 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-slate-900 p-6 sm:p-8 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Ready for Your Next Challenge?
                  </h3>
                  <a
                    href="#openings"
                    className="group inline-flex items-center bg-jis-yellow hover:bg-jis-yellow/90 text-gray-900 font-semibold px-8 py-3.5 rounded-md shadow-lg hover:shadow-jis-yellow/40 transform transition-all hover:-translate-y-1 active:scale-95"
                  >
                    <Search
                      size={20}
                      className="mr-2.5 transition-transform duration-300 group-hover:rotate-[360deg]"
                    />
                    Explore Open Positions
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Placeholder for other sections */}
        <section id="openings" className="py-20 md:py-28 bg-gray-950">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-14"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-jis-green">
                Current Openings
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Explore our exciting career opportunities and apply to be a part
                of our dynamic team.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {jobOpenings.map((job) => (
                <motion.div
                  key={job.id}
                  className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-jis-teal transition duration-300 shadow-lg"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {job.title}
                  </h3>
                  <ul className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    {job.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-1">
                        {detail.icon}
                        <span>{detail.text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  <button
                    onClick={() => handleApplyNow(job.id, job.title)}
                    className="group inline-flex items-center px-5 py-2.5 bg-jis-teal hover:bg-jis-teal/90 text-white font-medium rounded-lg transition-all hover:-translate-y-1 active:scale-95"
                  >
                    <Send
                      size={16}
                      className="mr-2 transition-transform group-hover:translate-x-1"
                    />
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.main>
    </div>
  );
};

export default Career;
