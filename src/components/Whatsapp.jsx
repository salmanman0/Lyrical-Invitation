import React from "react";
import whatsapplogo from "../assets/whatsapp-logo.png";

const WhatsApp = () => {
  return (
    <a href="https://wa.me/6285962890127" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-10">
      <img src={whatsapplogo} alt="whatsapp" className="h-10 w-10"/>
    </a>
  );
};

export default WhatsApp;
