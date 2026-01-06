import React from "react";
import { motion } from "framer-motion";
import { Train, ShoppingCart, Clock } from "lucide-react";

const LocationHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Train,
      title: "Twin Metro Access",
      desc: "5 Min Walk to Ameerpet & SR Nagar Stations.",
    },
    {
      icon: ShoppingCart,
      title: "Daily Essentials",
      desc: "1 Min to Reliance Fresh & Auto Stand.",
    },
    {
      icon: Clock,
      title: "Commute Friendly",
      desc: "Walk to class, Walk to work.",
    },
  ];

  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Strategically Placed.
          </h2>
          <p className="text-slate-500 text-lg">
            Save hours in traffic. Located in a quiet lane beside Reliance Fresh, you are minutes away from the city's lifelines while staying shielded from the noise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-1/2 z-0" />
    </section>
  );
};

export default LocationHighlights;