import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-50/90 z-10" />
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Modern Living Space"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-xs font-semibold tracking-wider mb-6 backdrop-blur-sm">
            WELCOME TO BSV EXECUTIVE
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Premium Living at the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Center of Connectivity
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the calm in the chaos. Strategically located between Ameerpet and SR Nagar Metro.
            Hygiene, food, and comfort designed for professionals.
          </p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#pricing"
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Rates
            </a>
            <a
              href="#location"
              className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Explore Location
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-white/50 animate-bounce" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;