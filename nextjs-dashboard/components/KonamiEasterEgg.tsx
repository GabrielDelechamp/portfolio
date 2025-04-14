"use client";

import { useEffect, useRef, useState } from "react";
import SnakeGame from "./SnakeGame";

// Code Konami à détecter pour déverrouiller le terminal
const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
];

// Lignes de démarrage simulées pour simuler le boot du terminal
const FAKE_BOOT_LINES = [
  "[OK] Initializing system modules...",
  "[OK] Loading configuration...",
  "[OK] Starting secure terminal session...",
  "[OK] Checking dependencies...",
  "[OK] Environment ready.",
];

// ASCII Art affiché après le déverrouillage du terminal
const ASCII_ART = `
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

// Fichiers disponibles dans le terminal, avec leurs contenus respectifs
const FILES: Record<string, string[]> = {
  "secret.txt": [
    "Le code Konami est: ↑↑↓↓←→←→BA",
    "Vous pouvez aussi lancer le jeu Snake avec: sudo start snake",
  ],
  "readme.md": [
    "# Terminal Gabriel",
    "",
    "Ce terminal est un Easter Egg amusant!",
    "- Tapez 'help' pour voir les commandes disponibles",
    "- Essayez 'sudo start snake' pour lancer un jeu",
  ],
  "config.json": [
    '{',
    '  "version": "1.0.0",',
    '  "env": "production",',
    '  "features": ["snake", "konami", "terminal-ui"]',
    '}',
  ],
  "snake.exe": [
    "Binary executable. Use 'sudo start snake' to launch.",
  ],
};

export default function Terminal() {
  // Etats du composant
  const [codeIndex, setCodeIndex] = useState(0); // Index du code Konami
  const [isUnlocked, setIsUnlocked] = useState(false); // Etat de déverrouillage du terminal
  const [bootDone, setBootDone] = useState(false); // Si le processus de démarrage est terminé
  const [history, setHistory] = useState<string[]>([]); // Historique des commandes et résultats
  const [input, setInput] = useState(""); // Valeur de l'entrée de commande actuelle
  const [showSnake, setShowSnake] = useState(false); // Etat pour afficher ou non le jeu Snake
  const inputRef = useRef<HTMLInputElement>(null); // Référence à l'élément input
  const historyRef = useRef<HTMLDivElement>(null); // Référence à la zone d'historique pour défilement automatique

  // Effet de défilement automatique de l'historique à chaque ajout de nouvelle ligne
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight; // Scrolle vers le bas
    }
  }, [history]); // Se déclenche chaque fois que l'historique change

  // Effet pour détecter la saisie du code Konami et déverrouiller le terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isUnlocked) {
        if (e.key === KONAMI_CODE[codeIndex]) {
          setCodeIndex((prev) => prev + 1); // Augmente l'index pour chaque touche correcte
          if (codeIndex + 1 === KONAMI_CODE.length) {
            setIsUnlocked(true); // Déverrouille le terminal si tout le code est correct
          }
        } else {
          setCodeIndex(0); // Réinitialise l'index si la touche est incorrecte
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown); // Ajoute l'événement
    return () => window.removeEventListener("keydown", handleKeyDown); // Nettoyage de l'événement
  }, [codeIndex, isUnlocked]);

  // Effet de démarrage du terminal avec des lignes de boot simulées
  useEffect(() => {
    if (isUnlocked && !bootDone) {
      let i = 0;
      const interval = setInterval(() => {
        setHistory((prev) => [...prev, FAKE_BOOT_LINES[i]]); // Ajoute les lignes de boot à l'historique
        i++;
        if (i >= FAKE_BOOT_LINES.length) {
          clearInterval(interval); // Arrête le défilement une fois que toutes les lignes sont ajoutées
          setTimeout(() => {
            setHistory((prev) => [...prev, ASCII_ART]); // Affiche l'ASCII art après le boot
            setBootDone(true); // Marque le boot comme terminé
          }, 500);
        }
      }, 600); // Délai entre chaque ligne de boot
    }
  }, [isUnlocked, bootDone]);

  // Fonction pour traiter les commandes du terminal
  const handleCommand = (command: string): string | string[] => {
    const trimmed = command.trim();

    if (trimmed === "help") {
      return [
        "Commandes disponibles:",
        "  help        - Affiche cette aide",
        "  clear       - Efface l'écran",
        "  echo [text] - Affiche le texte",
        "  sudo [cmd]  - Exécute une commande en tant qu'administrateur",
        "  exit        - Quitte le terminal",
        "  ls          - Liste les fichiers",
        "  cat [file]  - Affiche le contenu d'un fichier",
        "  date        - Affiche la date actuelle",
        "  whoami      - Affiche l'utilisateur actuel",
        "  uname       - Affiche les informations système",
      ];
    }

    if (trimmed === "clear") {
      setHistory([]); // Efface l'historique
      return "";
    }

    if (trimmed.startsWith("echo ")) {
      return trimmed.slice(5); // Affiche ce qui suit la commande 'echo'
    }

    if (trimmed === "exit") {
      setIsUnlocked(false); // Verrouille à nouveau le terminal
      setCodeIndex(0);
      setHistory([]);
      setInput("");
      setBootDone(false);
      return "Fermeture du terminal...";
    }

    if (trimmed === "ls") {
      return Object.keys(FILES).join("  "); // Liste des fichiers disponibles
    }

    if (trimmed.startsWith("cat ")) {
      const fileName = trimmed.slice(4);
      if (FILES[fileName]) return FILES[fileName]; // Affiche le contenu du fichier demandé
      return `Fichier introuvable: ${fileName}`;
    }

    if (trimmed === "date") {
      return new Date().toString(); // Affiche la date actuelle
    }

    if (trimmed === "whoami") {
      return "gabriel"; // Affiche l'utilisateur actuel
    }

    if (trimmed === "uname") {
      return "SecretTerminalOS 1.0.0 x64 (React/Linux)"; // Affiche les infos système
    }

    if (trimmed === "sudo start snake") {
      setShowSnake(true); // Lance le jeu Snake
      return "Launching Snake...";
    }

    if (trimmed.startsWith("sudo ")) {
      return `Commande exécutée avec privilèges : ${trimmed.slice(5)}`;
    }

    return `Commande inconnue : ${trimmed}`; // Gestion des commandes inconnues
  };

  // Fonction pour soumettre une commande
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    const result = handleCommand(input); // Exécute la commande
    const lines = Array.isArray(result) ? result : [result]; // Vérifie si le résultat est une liste de lignes

    setHistory((prev) => [...prev, `> ${input}`, ...lines]); // Ajoute la commande et son résultat à l'historique
    setInput(""); // Réinitialise le champ de saisie
  };

  // Callback pour gérer la fin du jeu Snake
  const handleGameOver = (score: number) => {
    setHistory((prev) => [...prev, `Game over! Final score: ${score}`]); // Affiche le score final
    setShowSnake(false); // Masque le jeu Snake après la fin
  };

  // Focus sur l'input au démarrage du terminal
  useEffect(() => {
    inputRef.current?.focus();
  }, [bootDone]);

  // Si le terminal n'est pas déverrouillé, on ne montre rien
  if (!isUnlocked) return null;

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono p-4 z-50 overflow-hidden">
      <div className="h-full flex flex-col">
        <div ref={historyRef} className="flex-1 overflow-y-auto mb-4 space-y-1">
          {history.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap">{line}</div>
          ))}
        </div>

        {bootDone && (
          <form onSubmit={handleSubmit}>
            <span className="text-green-400">$</span>{" "}
            <input
              ref={inputRef}
              className="bg-transparent outline-none text-green-500 w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)} // Mise à jour de l'input
              autoFocus
            />
          </form>
        )}

        {showSnake && (
          <div className="mt-6">
            <SnakeGame onGameOver={handleGameOver} /> {/* Affiche le jeu Snake */}
          </div>
        )}
      </div>
    </div>
  );
}
