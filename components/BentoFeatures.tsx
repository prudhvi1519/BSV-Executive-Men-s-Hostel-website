import React from "react";
import { motion } from "framer-motion";
import { AMENITIES } from "../constants";

const BentoFeatures: React.FC = () => {
  const Icon0 = AMENITIES[0].icon;
  const Icon1 = AMENITIES[1].icon;
  const Icon2 = AMENITIES[2].icon;
  const Icon3 = AMENITIES[3].icon;

  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Life at BSV Executive</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Box 1: Food (Large, spans 2 cols, 2 rows) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-slate-900 text-white min-h-[300px]"
          >
            <img 
                src={AMENITIES[0].image} 
                alt="Food" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-105 group-hover:scale-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                    <Icon0 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{AMENITIES[0].title}</h3>
                <p className="text-slate-300 leading-relaxed max-w-sm">{AMENITIES[0].description}</p>
            </div>
          </motion.div>

          {/* Box 2: Carrier Service */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-blue-50 p-8 flex flex-col justify-between border border-blue-100"
          >
             <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600">
                <Icon1 size={20} />
             </div>
             <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{AMENITIES[1].title}</h3>
                <p className="text-sm text-slate-600">{AMENITIES[1].description}</p>
             </div>
          </motion.div>

           {/* Box 3: Security */}
           <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-slate-50 p-8 flex flex-col justify-between border border-slate-200"
          >
             <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-800">
                <Icon2 size={20} />
             </div>
             <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{AMENITIES[2].title}</h3>
                <p className="text-sm text-slate-600">{AMENITIES[2].description}</p>
             </div>
          </motion.div>

          {/* Box 4: Hygiene (Wide on bottom right) */}
          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="md:col-span-2 md:row-span-1 rounded-3xl bg-slate-900 p-8 flex items-center gap-6 text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon3 size={24} className="text-blue-300" />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">{AMENITIES[3].title}</h3>
                    <p className="text-slate-400 text-sm max-w-xs">{AMENITIES[3].description}</p>
                </div>
            </div>
            {/* Abstract bg shape */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full translate-x-10 -translate-y-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;