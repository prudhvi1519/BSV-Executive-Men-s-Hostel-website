import React from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { CONTACT_PHONE, LOCATION_LINK } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-32 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Visit Us Today.</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                <p className="text-slate-300 text-lg leading-relaxed">
                  BSV EXECUTIVE BOYS HOSTEL<br />
                  CCQX+F58, Beside Reliance Fresh,<br />
                  Srinivasa Nagar, Ameerpet,<br />
                  Hyderabad, Telangana 500038
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-500 flex-shrink-0" size={24} />
                <p className="text-2xl font-bold">{CONTACT_PHONE}</p>
              </div>
            </div>
            
            <a 
                href={LOCATION_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
                <MapPin size={18} />
                Open in Google Maps
            </a>
          </div>

          <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simulated Map visual */}
             <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-500 font-mono text-sm">Interactive Map Embed Placeholder</span>
             </div>
             <img 
                src="https://picsum.photos/800/600?blur=2" 
                alt="Map Location" 
                className="opacity-30 object-cover w-full h-full"
             />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} BSV Executive Hostel. All rights reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;