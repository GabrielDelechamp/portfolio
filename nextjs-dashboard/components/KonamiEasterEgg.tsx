"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const useKonamiCode = (callback: () => void) => {
  const konamiSequence = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  const [keysPressed, setKeysPressed] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const updatedKeys = [...keysPressed, e.key];
      if (updatedKeys.length > konamiSequence.length) {
        updatedKeys.shift();
      }

      setKeysPressed(updatedKeys);

      const isKonamiCode = updatedKeys.length === konamiSequence.length &&
        updatedKeys.every((key, index) => key === konamiSequence[index]);

      if (isKonamiCode) {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback, keysPressed]);
};

const asciiArt = `
░██████╗░░█████╗░██████╗░██████╗░██╗███████╗██╗░░░░░
██╔════╝░██╔══██╗██╔══██╗██╔══██╗██║██╔════╝██║░░░░░
██║░░██╗░███████║██████╦╝██████╔╝██║█████╗░░██║░░░░░
██║░░╚██╗██╔══██║██╔══██╗██╔══██╗██║██╔══╝░░██║░░░░░
╚██████╔╝██║░░██║██████╦╝██║░░██║██║███████╗███████╗
░╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝╚══════╝╚══════╝

██████╗░███████╗██╗░░░░░███████╗░█████╗░██╗░░██╗░█████╗░███╗░░░███╗██████╗░
██╔══██╗██╔════╝██║░░░░░██╔════╝██╔══██╗██║░░██║██╔══██╗████╗░████║██╔══██╗
██║░░██║█████╗░░██║░░░░░█████╗░░██║░░╚═╝███████║███████║██╔████╔██║██████╔╝
██║░░██║██╔══╝░░██║░░░░░██╔══╝░░██║░░██╗██╔══██║██╔══██║██║╚██╔╝██║██╔═══╝░
██████╔╝███████╗███████╗███████╗╚█████╔╝██║░░██║██║░░██║██║░╚═╝░██║██║░░░░░
╚═════╝░╚══════╝╚══════╝╚══════╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░░░░
`;

const terminalLinesPool = [
  ">> Access granted ✅",
  ">> Compiling Next.js app...",
  ">> Uploading to Vercel ⬆️",
  ">> Activating dark mode 🌑",
  ">> Running ESLint check...",
  ">> Building React components...",
  ">> Authenticating with Supabase 🔑",
  ">> Encrypting frontend with 256-bit key...",
  ">> Terminal aesthetics: 100%",
  ">> Fetching memes from API 🤖",
  ">> Checking for bugs... 0 found",
  ">> Launching portfolio 🚀",
  ">> Reticulating splines...",
  ">> Activating AI assistant 🤖",
  ">> You are now being watched 👀",
  ">> Generating infinite lines...",
  ">> Establishing secure connection 🔒",
  ">> Running quantum simulations 🔮",
  ">> Initializing voice assistant 🎙️",
  ">> Syncing cloud storage ☁️",
  ">> Deploying AI models 🧠",
  ">> Testing advanced encryption algorithms 🔐",
  ">> Optimizing performance ⚡",
  ">> Streaming data from SpaceX satellites 🛰️",
  ">> Checking system health... All systems operational 🟢",
  ">> Calibrating sensors 📡",
  ">> Connecting to Mars rover 🔴",
  ">> Boosting signal strength 📶",
  ">> Running AI training... 99% complete 🤖",
  ">> Activating virtual assistant interface 💻",
  ">> Uploading encrypted backups to cloud 🌥️",
  ">> Synchronizing blockchain transactions 🔗",
  ">> Recalibrating time-travel device ⏳",
  ">> Securing files with 512-bit encryption 🔑",
  ">> Downloading new tech updates 💾",
  ">> Scanning for hidden vulnerabilities 🕵️‍♂️",
  ">> Launching self-healing AI systems 🤖",
  ">> Initializing artificial gravity system 🌍",
  ">> Establishing connection to IoT devices 📡",
  ">> Scaling database for future growth 📈",
  ">> Compressing files with 7z algorithm 📦",
  ">> Generating random numbers for algorithm 🎲",
  ">> Calculating probability of universe collapse 💥",
  ">> Shutting down redundant systems ⚡",
  ">> Deploying nanobots for system maintenance 🤖",
  ">> Preparing quantum computer for operations 🖥️",
  ">> Running diagnostics on AI core 🧠",
  ">> Verifying system updates 🔄",
  ">> Syncing across multiple dimensions 🌌",
  ">> Enhancing data compression algorithms 🗜️",
  ">> Generating visualizations for deep learning 🔍",
  ">> Transmitting data to deep space stations 🌠",
  ">> Booting up the new virtual reality module 🕶️",
  ">> Fetching weather data from Mars 🌍",
  ">> Connecting to neural network for deep learning 🧠",
  ">> Analyzing cosmic radiation data 🌟",
  ">> Running final system checks ✅",
  ">> Deleting obsolete files 🗑️",
  ">> Recharging battery levels ⚡",
  ">> Initiating self-awareness protocol 🔍",
  ">> Connecting to experimental AI servers 💻",
  ">> Establishing stable connection to the multiverse 🌐"
];

const useBeep = () => {
  const beep = () => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(1000, ctx.currentTime); // fréquence en Hz
    gain.gain.setValueAtTime(0.1, ctx.currentTime); // volume

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.05); // durée du beep
  };

  return beep;
};

const KonamiEasterEgg = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const beep = useBeep();

  const activateEasterEgg = useCallback(() => {
    setShowEasterEgg(true);
    setLines([]);
  }, []);

  useKonamiCode(activateEasterEgg);

  useEffect(() => {
    if (!showEasterEgg) return;

    const interval = setInterval(() => {
      const randomLine = terminalLinesPool[Math.floor(Math.random() * terminalLinesPool.length)];
      setLines(prev => {
        const updated = [...prev, randomLine];
        return updated.length > 12 ? updated.slice(updated.length - 12) : updated;
      });
      beep();
    }, 500);

    return () => clearInterval(interval);
  }, [showEasterEgg, beep]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  if (!showEasterEgg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black text-green-400 font-mono text-sm p-4 overflow-hidden">
      <div className="w-full max-w-3xl mt-10 h-full overflow-hidden">
        <pre className="text-green-500 mb-4 text-xs sm:text-sm md:text-base leading-tight">
          {asciiArt}
        </pre>
        <div className="overflow-y-auto max-h-[50vh]">
          {lines.map((line, index) => (
            <p key={index} className="animate-pulse-fast">{line}</p>
          ))}
          <div ref={bottomRef} />
        </div>
        <button
          onClick={() => setShowEasterEgg(false)}
          className="mt-6 px-4 py-1 border border-green-400 rounded hover:bg-green-500 hover:text-black transition duration-200"
        >
          Quitter le terminal
        </button>
      </div>
    </div>
  );
};


export default KonamiEasterEgg;
