"use client"; // Das hier MUSS eine Client Component sein für Animationen

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Bot, ShieldCheck, Terminal } from 'lucide-react';
import Dither from './Dither'; // Pfad prüfen!
import pb from "public/pb.png"; 

// Wir definieren die Props so, dass wir Children (Spotify) empfangen können
export default function Wrapper({ children }: { children: React.ReactNode }) {
  
  const tags = [
    { name: "Cybersecurity", icon: <ShieldCheck size={14} /> },
    { name: "Reinforcement Learning", icon: <Bot size={14} /> },
    { name: "Software Security", icon: <Terminal size={14} /> },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com/Yakyaz", icon: <Github size={22} /> },
    { name: "Instagram", url: "https://www.instagram.com/yakyaz_/", icon: <Instagram size={22} /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yakup-yazir-aa9a61247/", icon: <Linkedin size={22} /> },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-950 text-neutral-200 font-sans">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Dither 
          waveSpeed={0.05} 
          waveFrequency={5} 
          waveAmplitude={0.4} 
          waveColor={[0.5, 0.5, 0.5]} 
          colorNum={2} 
          pixelSize={4} 
          enableMouseInteraction={true} 
          mouseRadius={0.5}
        />
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-[1px] z-10 pointer-events-none"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl max-w-md w-full text-center"
        >
            <div className="relative mb-6 mx-auto w-32 h-32 group">
              <div className="absolute -inset-1 bg-white/10 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <Image className="relative rounded-full border border-neutral-700" alt="Yakyaz" src={pb} fill style={{objectFit: "cover"}} />
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">Yakup / yakyaz</h1>
            <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest mb-6">M.Sc. Student @ TU Dortmund</p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tags.map((tag) => (
                <div key={tag.name} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-300">
                  {tag.icon} <span>{tag.name}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" className="p-3 bg-white/5 rounded-xl border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
            
            {/* Hier wird Spotify reingeladen ohne den Client zu crashen */}
            <div className="mt-6 pt-6 border-t border-white/5">
                {children}
            </div>
        </motion.div>
      </div>
    </div>
  );
}