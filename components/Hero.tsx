"use client";

import React, { useMemo } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Bot, ShieldCheck, Terminal, Mail } from 'lucide-react'; // Mail Icon importiert
import Dither from './Dither'; 
import pb from "../public/pb1.png";

export default function Hero({ children }: { children: React.ReactNode }) {

  const age = useMemo(() => {
    const birthDate = new Date(2003, 7, 7); 
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  }, []);

  const tags = [
    { name: "Cybersecurity", icon: <ShieldCheck size={14} /> },
    { name: "Reinforcement Learning", icon: <Bot size={14} /> },
    { name: "Software Security", icon: <Terminal size={14} /> },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com/Yakyaz", icon: <Github size={22} /> },
    { name: "Instagram", url: "https://www.instagram.com/yakyaz_/", icon: <Instagram size={22} /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yakup-yazir-aa9a61247/", icon: <Linkedin size={22} /> },
    { name: "Reddit", url: "https://www.reddit.com/user/It3chii/", icon: <Bot size={22} /> },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-950 text-neutral-200 font-sans">
      
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
        <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[2px] z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-4">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md"
        >
        
          <div className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
            
            <div className="flex flex-col items-center text-center">
              
             
              <div className="relative mb-6 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Image
                  className="relative rounded-full border border-neutral-700 w-32 h-32 object-cover"
                  alt="Yakup / yakyaz"
                  src={pb}
                  placeholder="blur"
                  quality={100}
                />
              </div>

          
              <h1 className="text-3xl font-bold text-neutral-400 mb-2 tracking-tight">
                yakyaz
              </h1>
              <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest mb-6">
                M.Sc. Student @ TU Dortmund
              </p>

 
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tags.map((tag) => (
                  <div key={tag.name} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 transition-colors cursor-default">
                    {tag.icon}
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>


              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {age} y/o. Based near Dortmund. Interested in Reinforcement Learning and Cybersecurity —which is also the main focus of my studies.
              </p>

            
              <div className="flex gap-4 mb-6">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              
              <a 
                href="mailto:contact@yakyaz.dev"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-100 text-neutral-900 text-sm font-medium hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>

            </div>
          </div>

         
          <div className="mt-8 flex justify-center opacity-80 hover:opacity-100 transition-opacity">
             {children}
          </div>

        </motion.div>
      </div>
    </div>
  );
}