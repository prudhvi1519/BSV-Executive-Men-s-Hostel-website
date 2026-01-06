import React from "react";
import { motion } from "framer-motion";
import { Check, Wifi, Zap, Utensils } from "lucide-react";
import { PRICING_PLANS, ROOM_FEATURES } from "../constants";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-500">No hidden charges. Everything you need is included.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-3xl bg-white border ${
                plan.recommended 
                  ? "border-blue-500 shadow-2xl shadow-blue-900/10 z-10" 
                  : "border-slate-200 shadow-xl shadow-slate-200/50"
              } flex flex-col h-full`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    plan.recommended ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"
                }`}>
                    {plan.tag}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-400 font-medium">/ month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-slate-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-4">Included</p>
                <div className="flex justify-between text-slate-400">
                   {ROOM_FEATURES.map((feat, i) => (
                       <feat.icon key={i} size={20} className="hover:text-blue-500 transition-colors" title={feat.label} />
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;