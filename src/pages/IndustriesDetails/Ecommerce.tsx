// src/pages/industrydetails/EcommerceDetailPage.tsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, CheckCircle, Zap, Layers, Cpu, BarChart3, ShieldCheck, ThumbsUp, Target,
  MessageSquare, HelpCircle, FileText, Users, Lightbulb, Award, ArrowRight, ShoppingCart // Specific icon
} from 'lucide-react';

import UnifiedNavbar from "../../components/UnifiedNavbar";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";

// --- ANIMATION VARIANTS ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

// --- PAGE SPECIFIC DATA ---
const industryInfo = {
  name: 'E-commerce & Retail',
  icon: ShoppingCart,
  tagline: "Crafting Engaging Digital Storefronts that Drive Conversions and Customer Loyalty.",
  imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  overviewDescription: "We specialize in building immersive and high-conversion online shopping experiences. Our end-to-end e-commerce solutions empower retailers to thrive in the competitive digital marketplace, from custom platform development to AI-driven personalization.",
  detailedPoints: [
    "Our e-commerce strategies focus on creating seamless user journeys, optimizing for mobile, and integrating powerful analytics to understand customer behavior.",
    "We develop scalable B2C and B2B e-commerce platforms, feature-rich mobile commerce apps, and employ AI for personalized product recommendations and targeted marketing.",
    "Beyond the storefront, we provide solutions for efficient inventory management, order fulfillment, and integration with CRM and supply chain systems.",
    "We stay ahead of retail trends, incorporating features like AR/VR for enhanced product visualization and voice commerce capabilities to provide a futuristic shopping experience."
  ],
  keySolutions: [
    { title: 'Custom E-commerce Platforms', description: 'Bespoke B2C & B2B e-commerce website and application development tailored to your brand.', icon: Layers },
    { title: 'Mobile Commerce (m-Commerce)', description: 'Native and cross-platform mobile apps for seamless shopping on the go.', icon: Cpu },
    { title: 'AI Personalization Engines', description: 'AI-driven product recommendations, personalized offers, and dynamic content delivery.', icon: Zap },
    { title: 'Marketplace Integration', description: 'Seamless integration with major online marketplaces like Amazon, eBay, and Etsy.', icon: BarChart3 },
    { title: 'Payment Gateway Solutions', description: 'Secure integration of multiple payment gateways for smooth and reliable transactions.', icon: ShieldCheck },
    { title: 'Headless Commerce', description: 'Decoupled front-end and back-end architectures for maximum flexibility and performance.', icon: Target },
    { title: 'AR/VR Shopping Experiences', description: 'Immersive augmented and virtual reality features for product visualization and try-ons.', icon: Lightbulb },
    { title: 'CRM & OMS Integration', description: 'Integration with Customer Relationship Management and Order Management Systems for streamlined operations.', icon: Users },
  ],
  challenges: [
    "High customer acquisition costs and intense market competition.",
    "Meeting demands for fast, personalized, and omnichannel shopping experiences.",
    "Managing complex inventory across multiple channels.",
    "Ensuring robust security for customer data and payment transactions.",
    "Keeping up with rapidly evolving e-commerce technologies and trends.",
    "Dealing with cart abandonment and optimizing conversion rates."
  ],
  benefits: [
    "Increased sales and revenue through optimized conversion funnels and user experience.",
    "Enhanced customer loyalty and lifetime value via personalized engagement.",
    "Streamlined operations with integrated inventory, order, and customer management.",
    "Improved brand reach and market penetration with scalable platforms.",
    "Data-driven insights for informed decision-making and targeted marketing.",
    "Future-ready solutions adaptable to new technologies and market demands."
  ],
  relevantTechnologies: ["Shopify", "Magento", "WooCommerce", "React/Vue/Angular", "Node.js/Python", "PWA", "Headless CMS", "AI/ML", "Cloud (AWS, GCP)"],
  caseStudy: {
    title: "Boosting Online Sales for 'The Fashion Hub' by 60%",
    excerpt: "Explore how our comprehensive e-commerce solution, including a new platform and AI personalization, helped The Fashion Hub achieve record sales and customer engagement.",
    link: "/case-studies/the-fashion-hub-ecommerce"
  }
};

const EcommerceDetailPage: React.FC = () => {
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
                    Build Your E-commerce Success <ArrowRight className="ml-2 h-5 w-5" />
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-3 border-b-2 border-cyan-500/40 flex items-center"><Layers className="w-8 h-8 mr-3 text-cyan-400" />Innovating in {industryInfo.name}</h2>
                <div className="prose prose-lg prose-invert max-w-none text-slate-300/90 leading-relaxed space-y-5">
                  <p>{industryInfo.overviewDescription}</p>
                  {industryInfo.detailedPoints.map((point, index) => (<p key={index}>{point}</p>))}
                </div>
              </motion.section>

              <motion.section variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 pb-3 border-b-2 border-cyan-500/40 flex items-center"><Zap className="w-8 h-8 mr-3 text-cyan-400" /> Our Key E-commerce Solutions</h2>
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
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-red-500/40 flex items-center"><Target className="w-7 h-7 mr-3 text-red-400" /> Challenges We Tackle</h2>
                  <ul className="space-y-3">{industryInfo.challenges.map((challenge, index) => (<motion.li key={index} variants={fadeIn} className="flex items-start"><CheckCircle className="w-5 h-5 text-red-400/80 mr-2.5 mt-1 shrink-0" /><span>{challenge}</span></motion.li>))}</ul>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-emerald-500/40 flex items-center"><ThumbsUp className="w-7 h-7 mr-3 text-emerald-400" /> Benefits We Deliver</h2>
                  <ul className="space-y-3">{industryInfo.benefits.map((benefit, index) => (<motion.li key={index} variants={fadeIn} className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400/80 mr-2.5 mt-1 shrink-0" /><span>{benefit}</span></motion.li>))}</ul>
                </div>
              </motion.section>

              {industryInfo.caseStudy && (
                <motion.section variants={fadeIn}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 pb-3 border-b-2 border-cyan-500/40 flex items-center"><FileText className="w-8 h-8 mr-3 text-cyan-400" /> E-commerce Success Story</h2>
                  <div className="bg-gradient-to-r from-sky-800/30 to-emerald-800/30 p-8 rounded-xl shadow-xl border border-sky-700/50">
                    <h3 className="text-2xl font-semibold text-white mb-3">{industryInfo.caseStudy.title}</h3>
                    <p className="text-slate-300/90 mb-6 leading-relaxed">{industryInfo.caseStudy.excerpt}</p>
                    <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"><Link to={industryInfo.caseStudy.link}>View Case Study <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  </div>
                </motion.section>
              )}
            </motion.div>

            {/* SIDEBAR */}
            <motion.aside className="lg:col-span-4 space-y-10 sticky top-24 self-start" variants={fadeIn}>
              <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-5 flex items-center"><Lightbulb className="w-6 h-6 mr-3 text-cyan-400" /> Why Partner With Us?</h3>
                <ul className="space-y-3.5 text-sm text-slate-400">
                  {["Expertise in modern e-commerce tech.", "Focus on conversion rate optimization.", "Scalable and secure platform development.", "Data-driven personalization strategies.", "Dedicated post-launch support."].map((point, index) => (<li key={index} className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />{point}</li>))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-600/70 to-sky-600/80 p-8 rounded-xl border border-sky-500/50 text-center shadow-2xl backdrop-blur-sm">
                <MessageSquare className="w-12 h-12 text-sky-200 mx-auto mb-5" /><h3 className="text-2xl font-bold text-white mb-3">Elevate Your Online Retail?</h3>
                <p className="text-sky-100/90 mb-6 text-sm">Let's discuss your e-commerce vision and how we can help you achieve unparalleled online success.</p>
                <Button asChild size="lg" className="w-full bg-white text-sky-700 hover:bg-sky-100 font-semibold"><Link to="/contact">Get a Free Quote</Link></Button>
              </div>
              <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-5 flex items-center"><Cpu className="w-6 h-6 mr-3 text-cyan-400" /> Core E-commerce Technologies</h3>
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

export default EcommerceDetailPage;