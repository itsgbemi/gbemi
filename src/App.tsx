/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronRight, Linkedin, Instagram } from 'lucide-react';

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

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-3 text-left group"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-400 mt-1.5 shrink-0"
        >
          <ChevronRight size={18} />
        </motion.div>
        <h2 className="text-lg font-medium text-zinc-800 group-hover:text-zinc-600 transition-colors">
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
            <p className="pt-4 pb-2 pl-8 text-lg leading-relaxed text-zinc-600">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Column 1: Image */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[50vh] md:h-screen md:sticky md:top-0"
      >
        <img 
          src="https://res.cloudinary.com/dqhawdcol/image/upload/v1770113403/atntluraxudlc3x52arp.jpg" 
          alt="Gbemisola Oyeniyi" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Column 2: Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white"
      >
        <header className="mb-12">
          <h1 className="font-klee text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-2">
            Creating the good stuff
          </h1>
        </header>

        <div className="space-y-2 max-w-xl">
          <AccordionItem 
            question="What Do You Want To Be Known For?" 
            answer="My brilliance. Being a trailblazer. And yes, my great taste in books, music, and movies."
          />
          <AccordionItem 
            question="What Do You Currently Do?" 
            answer="I create websites, software, content and manage sales marketing channels for businesses."
          />
          <AccordionItem 
            question="Anything In The Works You Wanna Put Out There?" 
            answer="Zysculpt, for job seekers chasing their first role or their next big move."
          />
          <AccordionItem 
            question="Are There Dreams You Haven't Achieved Yet That You Still Want To?" 
            answer="Become a renowned artist."
          />
        </div>

        <div className="mt-16 flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a 
              href="mailto:hi@gbemisolaoyeniyi.com" 
              className="text-lg font-medium text-zinc-800 hover:text-zinc-600 transition-colors underline underline-offset-4 decoration-zinc-200"
            >
              Get in touch
            </a>
            <Link 
              to="/blog" 
              className="text-lg font-medium text-zinc-800 hover:text-zinc-600 transition-colors underline underline-offset-4 decoration-zinc-200"
            >
              Blog
            </Link>
          </div>

          <div className="flex flex-wrap gap-8">
            <a href="https://linkedin.com/in/gbemisola-oyeniyi" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" title="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="https://instagram.com/soarwithgbemi" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" title="Instagram">
              <Instagram size={22} />
            </a>
            <a href="https://x.com/soarwithgbemi" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" title="X">
              <XIcon size={22} />
            </a>
            <a href="https://tiktok.com/@soarwithgbemi" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" title="TikTok">
              <TikTokIcon size={22} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-klee text-4xl md:text-6xl text-zinc-900 mb-6">Blog</h1>
        <p className="text-xl text-zinc-500 mb-12">Coming soon</p>
        <Link 
          to="/" 
          className="px-8 py-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all"
        >
          Back Home
        </Link>
      </motion.div>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-zinc-50">
      {/* Column 1: Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[50vh] md:h-screen"
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
        <h1 className="font-klee text-6xl md:text-8xl text-zinc-900 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-800 mb-8">
          Looks like you've wandered off the trail.
        </h2>
        <p className="text-lg text-zinc-600 mb-12 max-w-md">
          The page you're looking for doesn't exist or has been moved to a different coordinate in the digital landscape.
        </p>
        <Link 
          to="/" 
          className="px-8 py-4 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all transform hover:scale-105"
        >
          Return Home
        </Link>
      </motion.div>
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
