/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, ReactNode } from 'react';
import { ChevronRight, Linkedin, Instagram, Mail, Github } from 'lucide-react';

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62-.02 5.24-.02 7.86-.03 1.17-.36 2.34-1.01 3.32-.85 1.29-2.21 2.13-3.72 2.35-1.14.17-2.31.07-3.4-.31-1.87-.7-3.22-2.51-3.41-4.48-.22-2.15.87-4.39 2.72-5.5 1.01-.6 2.22-.85 3.39-.76v4.02c-.63-.07-1.3.01-1.84.33-.54.31-.91.82-1.03 1.43-.17.86.13 1.81.8 2.39.67.58 1.62.73 2.46.44.72-.25 1.22-.89 1.35-1.64.09-.52.09-1.04.08-1.57V.02z" />
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-6 ${className}`}>
    <a href="mailto:soarwithgbemi@gmail.com" className="hover:opacity-70 transition-opacity" title="Mail"><Mail size={20} /></a>
    <a href="https://github.com/itsgbemi" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="GitHub"><GithubIcon size={20} /></a>
    <a href="https://linkedin.com/in/gbemisola-oyeniyi" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="LinkedIn"><LinkedinIcon size={20} /></a>
    <a href="https://instagram.com/soarwithgbemi" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="Instagram"><Instagram size={20} /></a>
    <a href="https://x.com/soarwithgbemi" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="X"><XIcon size={20} /></a>
    <a href="https://tiktok.com/@soarwithgbemi" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="TikTok"><TikTokIcon size={20} /></a>
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLeft = ['HOME', 'SERVICES', 'WORK', 'RESOURCES'];
  const navRight = ['PROJECTS', 'BLOG', 'ABOUT', 'CONTACT'];
  const allNav = [...navLeft, ...navRight];

  return (
    <header className="bg-white z-50">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20 md:h-28">
          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex gap-10 flex-1 justify-end pr-12">
            {navLeft.map(item => (
              <Link key={item} to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="font-archivo font-bold uppercase tracking-wider text-zinc-900 hover:text-zinc-600 transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1775389731/bjygjus0oidbnyl1tvpr.svg" alt="Logo" className="h-12 md:h-20" referrerPolicy="no-referrer" />
          </Link>

          {/* Desktop Right Nav */}
          <nav className="hidden lg:flex gap-10 flex-1 pl-12">
            {navRight.map(item => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="font-archivo font-bold uppercase tracking-wider text-zinc-900 hover:text-zinc-600 transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50 flex-1 justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black flex flex-col justify-center items-end gap-1.5 p-2 md:p-3 bg-white active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all relative"
            >
              <div className={`h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'w-full rotate-45 translate-y-1' : 'w-full'}`} />
              <div className={`h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'w-full -rotate-45 -translate-y-1' : 'w-2/3'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 md:top-28 left-0 w-full bg-white border-b border-zinc-100 shadow-lg lg:hidden overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col items-end gap-6 text-right">
              {allNav.map(item => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-archivo font-bold uppercase text-2xl tracking-wider text-zinc-900 hover:text-zinc-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <div className="flex gap-5 mt-4 pt-8 border-t border-zinc-100 w-full justify-end">
                <SocialLinks className="text-zinc-900" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full mt-20 bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <img 
          src="https://res.cloudinary.com/dqhawdcol/image/upload/v1775395327/uuchwcwelmemwyuv2pcw.svg" 
          alt="Footer Graphic" 
          className="w-full h-auto object-cover block pt-12"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="py-12 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">&copy; {currentYear}</span>
            <Link to="/sitemap" className="underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">SITEMAP</Link>
            <a href="/llm.txt" className="underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">LLM.TXT</a>
          </div>
          <SocialLinks className="text-white" />
        </div>
      </div>
    </footer>
  );
};

const AccordionItem = ({ question, answer }: { question: string; answer: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-4 text-left group"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-400 mt-1 shrink-0"
        >
          <ChevronRight size={24} />
        </motion.div>
        <h2 className="text-xl md:text-2xl font-archivo font-bold uppercase text-zinc-900 group-hover:text-zinc-600 transition-colors">
          {question}
        </h2>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2 pl-10 font-geist text-lg leading-relaxed text-zinc-700">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full">
          <img 
            src="https://res.cloudinary.com/dqhawdcol/image/upload/q_auto/f_auto/v1770113403/atntluraxudlc3x52arp.jpg" 
            alt="Gbemisola Oyeniyi" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24">
            <div className="flex flex-col gap-10">
              <h1 className="font-anton text-5xl md:text-7xl lg:text-9xl uppercase leading-[1] text-zinc-900">
                EXCEPTIONALLY MULTI-TALENTED AND DEVOTED TO EXCELLENCE
              </h1>
              <p className="font-livvic text-xl md:text-2xl text-zinc-700 leading-relaxed max-w-5xl">
                Hi, I'm Gbémisọlá (<i>lit. carry me to wealth</i>) and the first three noteworthy qualities about me are; my devotion to excellence, avid interest in creating, and self-development. Those three things, plus my skillset in creating great websites, content and structure ensure businesses I support experience growth across multiple marketing and operations channels. My current skill stack include website development, software development, AI video generation, AI image generation and growth marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20 border-t border-zinc-100">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-anton text-3xl md:text-4xl uppercase tracking-tight text-zinc-900">Featured Work</h2>
            <Link to="/work" className="font-archivo font-normal underline uppercase tracking-widest text-zinc-900 hover:text-zinc-600 transition-colors">View All</Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12">
            <a href="https://dohscares.org" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src="https://res.cloudinary.com/dqhawdcol/image/upload/q_auto/f_auto/v1775420089/n57lbfgifngf2jczgruv.jpg" 
                  alt="DOHS Cares Foundation Website Mockup" 
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-anton text-lg md:text-2xl uppercase mb-1">DOHS Cares Foundation</h3>
              <p className="font-livvic text-zinc-500 tracking-wider text-[10px] md:text-sm">Website Design & Development</p>
            </a>
            
            <a href="https://springstoninternationalschool.com/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src="https://res.cloudinary.com/dqhawdcol/image/upload/v1775420088/jblo1kfaf0ihxis22x0b.jpg" 
                  alt="Springston International School Street Mockup" 
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-anton text-lg md:text-2xl uppercase mb-1">Springston International School</h3>
              <p className="font-livvic text-zinc-500 tracking-wider text-[10px] md:text-sm">Website Design & Development</p>
            </a>
          </div>
        </section>

        {/* Resources Section */}
        <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20 border-t border-zinc-100">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-anton text-3xl md:text-4xl uppercase tracking-tight text-zinc-900">Resources</h2>
            <Link to="/resources" className="font-archivo font-normal underline uppercase tracking-widest text-zinc-900 hover:text-zinc-600 transition-colors">View All</Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12">
            <a href="https://createqrcodes.vercel.app/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src="https://res.cloudinary.com/dqhawdcol/image/upload/q_auto/f_auto/v1775427422/ntrtof0h2cm1ojapebfo.jpg" 
                  alt="QR Code Generator Street Mockup" 
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-anton text-lg md:text-2xl uppercase mb-1">QR Code Generator</h3>
              <p className="font-livvic text-zinc-500 tracking-wider text-[10px] md:text-sm">Free Tool</p>
            </a>
            
            <a href="https://ai.studio/apps/62acee87-0220-401f-bf70-61e1728bdd72" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src="https://res.cloudinary.com/dqhawdcol/image/upload/q_auto/f_auto/v1775428312/pbuam1iwhnsh1swqehgg.jpg" 
                  alt="AI Text to Speech Website Mockup" 
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-anton text-lg md:text-2xl uppercase mb-1">AI Text to Speech</h3>
              <p className="font-livvic text-zinc-500 tracking-wider text-[10px] md:text-sm">AI Applet</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-anton uppercase text-5xl md:text-7xl text-zinc-900 mb-6">Blog</h1>
          <p className="font-livvic text-xl text-zinc-500 mb-12">Coming soon</p>
          <Link 
            to="/" 
            className="px-8 py-4 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-archivo font-bold uppercase tracking-wider text-zinc-900 hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Back Home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

const NotFound = () => {
  useEffect(() => {
    // Soft 404 fix: tell search engines not to index this page
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Column 1: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[50vh] md:h-auto"
        >
          <img 
            src="https://res.cloudinary.com/dqhawdcol/image/upload/v1773399433/xtqsqu7iyhg5g2yjjvgz.png" 
            alt="404 Not Found" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Column 2: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center items-start"
        >
          <h1 className="font-anton text-6xl md:text-8xl text-zinc-900 mb-6">404</h1>
          <h2 className="font-livvic text-2xl md:text-3xl font-medium text-zinc-800 mb-8">
            Looks like you've wandered off the trail.
          </h2>
          <p className="font-livvic text-lg text-zinc-600 mb-12 max-w-md">
            The page you're looking for doesn't exist or has been moved to a different coordinate in the digital landscape.
          </p>
          <Link 
            to="/" 
            className="px-8 py-4 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-archivo font-bold uppercase tracking-wider text-zinc-900 hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Return Home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
