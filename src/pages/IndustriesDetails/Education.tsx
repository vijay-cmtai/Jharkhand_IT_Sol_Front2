// src/pages/industrydetails/EducationDetailPage.tsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, CheckCircle, Zap, Layers, Cpu, BarChart3, ShieldCheck, ThumbsUp, Target,
  MessageSquare, HelpCircle, FileText, Users, Lightbulb, Award, ArrowRight, GraduationCap // Specific icon
} from 'lucide-react';

import UnifiedNavbar from "../../components/UnifiedNavbar";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";

// --- ANIMATION VARIANTS ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

// --- PAGE SPECIFIC DATA ---
const industryInfo = {
  name: 'Education (EdTech)',
  icon: GraduationCap,
  tagline: "Empowering Learners and Educators with Innovative and Accessible EdTech Solutions.",
  imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  overviewDescription: "We are passionate about innovating learning experiences for students and educators globally. Our EdTech solutions focus on making education more accessible, engaging, personalized, and effective through technology.",
  detailedPoints: [
    "We develop interactive e-learning platforms, robust Learning Management Systems (LMS), virtual classrooms, and comprehensive student management systems (SIS).",
    "Our team leverages AI to create personalized learning paths, adaptive assessments, and intelligent tutoring systems that cater to individual student needs.",
    "We explore immersive technologies like AR/VR to create engaging educational content and simulations, transforming traditional learning methods.",
    "Accessibility and inclusivity are core to our EdTech philosophy, ensuring our platforms are usable by learners of all abilities and backgrounds."
  ],
  keySolutions: [
    { title: 'Learning Management Systems (LMS)', description: 'Custom LMS development with features for course creation, delivery, tracking, and assessment.', icon: Layers },
    { title: 'Virtual Classroom Platforms', description: 'Interactive platforms for live online classes, webinars, and collaborative learning.', icon: MessageSquare },
    { title: 'AI-Powered Personalized Learning', description: 'Adaptive learning paths, intelligent tutoring, and AI-driven content recommendations.', icon: Cpu },
    { title: 'Student Information Systems (SIS)', description: 'Comprehensive systems for managing student data, admissions, grading, and administrative tasks.', icon: Users },
    { title: 'Online Assessment & Proctoring', description: 'Secure tools for creating, delivering, and proctoring online exams and assessments.', icon: ShieldCheck },
    { title: 'EdTech Mobile Applications', description: 'Engaging mobile learning apps for students and content delivery tools for educators.', icon: Zap },
    { title: 'AR/VR in Education', description: 'Development of immersive learning experiences using Augmented and Virtual Reality.', icon: Lightbulb },
    { title: 'Gamified Learning Content', description: 'Creating interactive and gamified educational modules to boost student engagement and retention.', icon: BarChart3 },
  ],
  challenges: [
    "Bridging the digital divide and ensuring equitable access to technology.",
    "Engaging students effectively in remote and hybrid learning environments.",
    "Integrating new EdTech tools seamlessly with existing institutional systems.",
    "Ensuring data privacy and security for student information.",
    "Providing adequate training and support for educators to utilize new technologies.",
    "Measuring the impact and effectiveness of EdTech interventions."
  ],
  benefits: [
    "Enhanced student engagement and motivation through interactive and personalized learning.",
    "Improved learning outcomes and knowledge retention.",
    "Greater accessibility and flexibility in education delivery.",
    "Streamlined administrative processes for educational institutions.",
    "Data-driven insights for educators to tailor instruction and support students.",
    "Development of future-ready skills through technology-enhanced learning."
  ],
  relevantTechnologies: ["Moodle/Canvas APIs", "WebRTC", "AI/ML (NLP, CV)", "React/Angular", "Node.js", "AR/VR SDKs", "xAPI/SCORM", "Cloud (AWS, Azure)"],
  caseStudy: {
    title: "Transforming K-12 Learning with an Interactive E-Learning Platform",
    excerpt: "See how our custom LMS and personalized learning modules improved student engagement by 50% and test scores by 15% for a leading school district.",
    link: "/case-studies/k12-elearning-platform-edtech"
  }
};

const EducationDetailPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const IndustryIcon = industryInfo.icon;

  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen antialiased flex flex-col">
      <UnifiedNavbar />
      <main className="flex-grow">
        {/* BANNER */}
        <motion.section
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 text-white overflow-hidden"
          initial="hidden" animate="visible" variants={fadeIn}
        >
          <div className="absolute inset-0 z-0">
            <img src={industryInfo.imageUrl} alt={`${industryInfo.name} background`} className="w-full h-full object-cover opacity-20 blur-sm"/>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/70 to-sky-900/30"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div className="max-w-4xl mx-auto text-center" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="mb-4"><IndustryIcon className="w-16 h-16 text-cyan-400 mx-auto" /></motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500">{industryInfo.name}</motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">{industryInfo.tagline}</motion.p>
              <motion.div variants={fadeIn} className="mt-8">
                 <Button size="lg" onClick={() => navigate("/contact")} className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold">
                    Shape the Future of Learning <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* MAIN CONTENT */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div className="lg:col-span-8 space-y-16" variants={fadeIn}>
              <motion.section variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-3 border-b-2 border-cyan-500/40 flex items-center"><Layers className="w-8 h-8 mr-3 text-cyan-400" />Pioneering {industryInfo.name}</h2>
                <div className="prose prose-lg prose-invert max-w-none text-slate-300/90 leading-relaxed space-y-5">
                  <p>{industryInfo.overviewDescription}</p>
                  {industryInfo.detailedPoints.map((point, index) => (<p key={index}>{point}</p>))}
                </div>
              </motion.section>

              <motion.section variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 pb-3 border-b-2 border-cyan-500/40 flex items-center"><Zap className="w-8 h-8 mr-3 text-cyan-400" /> Our Key EdTech Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {industryInfo.keySolutions.map((solution, index) => {
                    const SolutionIcon = solution.icon;
                    return (
                    <motion.div key={index} variants={fadeIn} className="bg-slate-800/60 border border-slate-700/70 rounded-xl p-6 shadow-lg hover:border-cyan-500/60 transition-colors">
                      <div className="flex items-center mb-3"><SolutionIcon className="w-7 h-7 text-emerald-400 mr-3 shrink-0" /><h3 className="text-xl font-semibold text-cyan-300">{solution.title}</h3></div>
                      <p className="text-sm text-slate-400/90 leading-relaxed">{solution.description}</p>
                    </motion.div>
                  )})}
                </div>
              </motion.section>

              <motion.section variants={fadeIn} className="grid md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-red-500/40 flex items-center"><Target className="w-7 h-7 mr-3 text-red-400" /> Educational Challenges We Solve</h2>
                  <ul className="space-y-3">{industryInfo.challenges.map((challenge, index) => (<motion.li key={index} variants={fadeIn} className="flex items-start"><CheckCircle className="w-5 h-5 text-red-400/80 mr-2.5 mt-1 shrink-0" /><span>{challenge}</span></motion.li>))}</ul>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-emerald-500/40 flex items-center"><ThumbsUp className="w-7 h-7 mr-3 text-emerald-400" /> Advantages We Offer</h2>
                  <ul className="space-y-3">{industryInfo.benefits.map((benefit, index) => (<motion.li key={index} variants={fadeIn} className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400/80 mr-2.5 mt-1 shrink-0" /><span>{benefit}</span></motion.li>))}</ul>
                </div>
              </motion.section>

              {industryInfo.caseStudy && (
                <motion.section variants={fadeIn}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 pb-3 border-b-2 border-cyan-500/40 flex items-center"><FileText className="w-8 h-8 mr-3 text-cyan-400" /> EdTech Impact Story</h2>
                  <div className="bg-gradient-to-r from-sky-800/30 to-emerald-800/30 p-8 rounded-xl shadow-xl border border-sky-700/50">
                    <h3 className="text-2xl font-semibold text-white mb-3">{industryInfo.caseStudy.title}</h3>
                    <p className="text-slate-300/90 mb-6 leading-relaxed">{industryInfo.caseStudy.excerpt}</p>
                    <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"><Link to={industryInfo.caseStudy.link}>Discover the Impact <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  </div>
                </motion.section>
              )}
            </motion.div>

            {/* SIDEBAR */}
            <motion.aside className="lg:col-span-4 space-y-10 sticky top-24 self-start" variants={fadeIn}>
              <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-5 flex items-center"><Lightbulb className="w-6 h-6 mr-3 text-cyan-400" /> Why Choose Our EdTech Expertise?</h3>
                <ul className="space-y-3.5 text-sm text-slate-400">
                  {["Pedagogy-driven tech solutions.", "Focus on accessibility & inclusivity.", "Scalable and secure learning platforms.", "Expertise in AI & immersive tech.", "Continuous support & training."].map((point, index) => (<li key={index} className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />{point}</li>))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-600/70 to-sky-600/80 p-8 rounded-xl border border-sky-500/50 text-center shadow-2xl backdrop-blur-sm">
                <MessageSquare className="w-12 h-12 text-sky-200 mx-auto mb-5" /><h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Education?</h3>
                <p className="text-sky-100/90 mb-6 text-sm">Let's collaborate to create impactful EdTech solutions that empower learners and educators alike.</p>
                <Button asChild size="lg" className="w-full bg-white text-sky-700 hover:bg-sky-100 font-semibold"><Link to="/contact">Start the Conversation</Link></Button>
              </div>
              <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-5 flex items-center"><Cpu className="w-6 h-6 mr-3 text-cyan-400" /> Key EdTech Technologies</h3>
                <div className="flex flex-wrap gap-2">{industryInfo.relevantTechnologies.map(tech => (<span key={tech} className="bg-slate-700 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-600">{tech}</span>))}</div>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default EducationDetailPage;