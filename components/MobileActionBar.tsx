import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_PHONE, WHATSAPP_LINK } from "../constants";

const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
      <div className="bg-white/90 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-2 flex gap-2">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-green-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={18} />
          Chat
        </a>
        <a 
          href={`tel:${CONTACT_PHONE}`}
          className="flex-1 bg-slate-900 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm hover:bg-slate-800 transition-colors"
        >
          <Phone size={18} />
          Call Owner
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;