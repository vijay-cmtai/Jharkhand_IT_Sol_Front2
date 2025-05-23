// src/pages/industrydetails/FinanceDetailPage.tsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, CheckCircle, Zap, Layers, Cpu, BarChart3, ShieldCheck, ThumbsUp, Target,
  MessageSquare, HelpCircle, FileText, Users, Lightbulb, Award, ArrowRight, DollarSign // Specific icon
} from 'lucide-react';

import UnifiedNavbar from "../../components/UnifiedNavbar";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// --- ANIMATION VARIANTS ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

// --- PAGE SPECIFIC DATA ---
const industryInfo = {
  name: 'Banking & Finance (FinTech)',
  icon: DollarSign,
  tagline: "Architecting the Future of Finance with Secure and Innovative FinTech Solutions.",
  imageUrl: 'https://images.unsplash.com/photo-1600979990900-92fab73c6939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbnRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80', // From IndustriesPage
  overviewDescription: "We are at the forefront of transforming financial services, empowering banks, insurance companies, and FinTech startups with secure, agile, and customer-centric digital solutions. Our expertise helps clients navigate the complex and evolving financial landscape.",
  detailedPoints: [
    "Our FinTech solutions are built on a foundation of robust security, regulatory compliance, and cutting-edge technology to address the unique challenges of the financial sector.",
    "We specialize in developing next-generation digital banking platforms, AI-driven fraud detection systems, seamless payment gateway integrations, and innovative blockchain applications.",
    "By fostering a culture of continuous innovation, we help financial institutions enhance customer experiences, optimize operational efficiency, and gain a competitive edge in a rapidly changing market.",
    "Our approach involves a deep understanding of financial workflows, risk management, and the importance of data integrity to deliver solutions that are both powerful and trustworthy."
  ],
  keySolutions: [
    { title: 'Digital Banking Platforms', description: 'Comprehensive solutions for online and mobile banking, account management, and customer self-service.', icon: Cpu },
    { title: 'Payment Processing & Gateways', description: 'Secure and efficient payment gateway integrations, including real-time payments and cross-border transactions.', icon: Zap },
    { title: 'AI for Fraud & Risk', description: 'Advanced AI/ML models for real-time fraud detection, credit risk assessment, and AML compliance.', icon: ShieldCheck },
    { title: 'Blockchain & DLT', description: 'Development of decentralized applications (dApps), smart contracts, and solutions for secure asset tokenization and trade finance.', icon: Layers },
    { title: 'Regulatory Technology (RegTech)', description: 'Automated solutions for regulatory reporting, KYC/AML compliance, and transaction monitoring.', icon: FileText },
    { title: 'WealthTech & Robo-Advisory', description: 'Platforms for automated investment advice, portfolio management, and personalized financial planning.', icon: BarChart3 },
    { title: 'InsurTech Solutions', description: 'Digital platforms for insurance underwriting, claims processing, policy management, and customer engagement.', icon: ThumbsUp },
    { title: 'Open Banking & APIs', description: 'Developing secure API ecosystems to enable third-party integrations and foster innovation in financial services.', icon: MessageSquare },
  ],
  challenges: [
    "Navigating complex and ever-changing regulatory landscapes (e.g., PSD2, GDPR, CCPA).",
    "Combating sophisticated cybersecurity threats and ensuring data protection.",
    "Meeting evolving customer expectations for seamless digital experiences.",
    "Integrating legacy systems with modern FinTech innovations.",
    "Managing vast amounts of financial data for insights and risk management.",
    "The rapid pace of technological disruption and competition from new entrants."
  ],
  benefits: [
    "Enhanced operational efficiency through automation and streamlined processes.",
    "Improved customer acquisition, engagement, and retention via superior digital experiences.",
    "Strengthened security posture and reduced risk of fraud and cyberattacks.",
    "Greater agility to adapt to market changes and launch new products quickly.",
    "Data-driven decision-making for better risk management and personalized services.",
    "Compliance with regulatory requirements, minimizing penalties and reputational damage."
  ],
  relevantTechnologies: ["AI/ML", "Blockchain", "Cloud Computing (AWS, Azure)", "Microservices", "API Gateways", "Cybersecurity Tools", "Big Data Analytics", "DevSecOps"],
  caseStudy: {
    title: "Revolutionizing Digital Banking for Global Finance Corp",
    excerpt: "Learn how our custom digital banking platform enabled Global Finance Corp to increase customer engagement by 40% and reduce operational costs significantly.",
    link: "/case-studies/global-finance-corp-fintech"
  }
};

const FinanceDetailPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const IndustryIcon = industryInfo.icon;

  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen antialiased flex flex-col">
      <UnifiedNavbar />
      <main className="flex-grow">
        {/* BANNER SECTION */}
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
                    Discuss Your FinTech Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" variants={staggerContainer} initial="hidden" animate="visible">
            {/* LEFT/MAIN CONTENT AREA */}
            <motion.div className="lg:col-span-8 space-y-16" variants={fadeIn}>
              <motion.section variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-3 border-b-2 border-cyan-500/40 flex items-center"><Layers className="w-8 h-8 mr-3 text-cyan-400" />Empowering {industryInfo.name}</h2>
                <div className="prose prose-lg prose-invert max-w-none text-slate-300/90 leading-relaxed space-y-5">
                  <p>{industryInfo.overviewDescription}</p>
                  {industryInfo.detailedPoints.map((point, index) => (<p key={index}>{point}</p>))}
                </div>
              </motion.section>

              <motion.section variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 pb-3 border-b-2 border-cyan-500/40 flex items-center"><Zap className="w-8 h-8 mr-3 text-cyan-400" /> Our Key {industryInfo.name.split('(')[0].trim()} Solutions</h2>
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
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-red-500/40 flex items-center"><Target className="w-7 h-7 mr-3 text-red-400" /> Challenges We Address</h2>
                  <ul className="space-y-3">{industryInfo.challenges.map((challenge, index) => (<motion.li key={index} variants={fadeIn} className="flex items-start"><CheckCircle className="w-5 h-5 text-red-400/80 mr-2.5 mt-1 shrink-0" /><span>{challenge}</span></motion.li>))}</ul>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-emerald-500/40 flex items-center"><ThumbsUp className="w-7 h-7 mr-3 text-emerald-400" /> Benefits of Our Solutions</h2>
                  <ul className="space-y-3">{industryInfo.benefits.map((benefit, index) => (<motion.li key={index} variants={fadeIn} className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400/80 mr-2.5 mt-1 shrink-0" /><span>{benefit}</span></motion.li>))}</ul>
                </div>
              </motion.section>

              {industryInfo.caseStudy && (
                <motion.section variants={fadeIn}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 pb-3 border-b-2 border-cyan-500/40 flex items-center"><FileText className="w-8 h-8 mr-3 text-cyan-400" /> Success in {industryInfo.name.split('(')[0].trim()}</h2>
                  <div className="bg-gradient-to-r from-sky-800/30 to-emerald-800/30 p-8 rounded-xl shadow-xl border border-sky-700/50">
                    <h3 className="text-2xl font-semibold text-white mb-3">{industryInfo.caseStudy.title}</h3>
                    <p className="text-slate-300/90 mb-6 leading-relaxed">{industryInfo.caseStudy.excerpt}</p>
                    <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"><Link to={industryInfo.caseStudy.link}>Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  </div>
                </motion.section>
              )}
            </motion.div>

            {/* RIGHT SIDEBAR */}
            <motion.aside className="lg:col-span-4 space-y-10 sticky top-24 self-start" variants={fadeIn}>
              <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-5 flex items-center"><Lightbulb className="w-6 h-6 mr-3 text-cyan-400" /> Why Us for {industryInfo.name.split('(')[0].trim()}?</h3>
                <ul className="space-y-3.5 text-sm text-slate-400">
                  {["Deep FinTech domain knowledge.", "Emphasis on security & compliance.", "Agile and future-ready solutions.", "Collaborative partnership model.", "Proven delivery excellence.", "Focus on customer-centric innovation."].map((point, index) => (<li key={index} className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />{point}</li>))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-600/70 to-sky-600/80 p-8 rounded-xl border border-sky-500/50 text-center shadow-2xl backdrop-blur-sm">
                <MessageSquare className="w-12 h-12 text-sky-200 mx-auto mb-5" /><h3 className="text-2xl font-bold text-white mb-3">Ready for FinTech Transformation?</h3>
                <p className="text-sky-100/90 mb-6 text-sm">Discuss how our FinTech solutions can revolutionize your financial services and drive growth.</p>
                <Button asChild size="lg" className="w-full bg-white text-sky-700 hover:bg-sky-100 font-semibold"><Link to="/contact">Request a Consultation</Link></Button>
              </div>
              <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-5 flex items-center"><Cpu className="w-6 h-6 mr-3 text-cyan-400" /> Technologies We Master</h3>
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

export default FinanceDetailPage;