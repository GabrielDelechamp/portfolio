"use client";

import { useEffect, useRef, useState } from "react";

// Paramètres du jeu Snake
const CANVAS_SIZE = 300; // Taille du canevas (en pixels)
const SCALE = 10; // Taille d'un carré représentant une cellule du serpent ou de la nourriture
const INITIAL_SNAKE = [ // Position initiale du serpent
  { x: 8, y: 7 },
  { x: 7, y: 7 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 }; // Direction initiale (déplacement vers la droite)

export default function SnakeGame({ onGameOver }: { onGameOver: (score: number) => void }) {
  // Références pour le canevas et gestion de l'état du jeu
  const canvasRef = useRef<HTMLCanvasElement>(null); // Référence du canevas pour le dessin
  const [snake, setSnake] = useState(INITIAL_SNAKE); // Etat du serpent
  const [food, setFood] = useState(generateFood(INITIAL_SNAKE)); // Etat de la nourriture
  const [direction, setDirection] = useState(INITIAL_DIRECTION); // Etat de la direction actuelle du serpent
  const [score, setScore] = useState(0); // Score actuel
  const [isRunning, setIsRunning] = useState(true); // Etat si le jeu est en cours ou non

  // Boucle de jeu pour déplacer le serpent et gérer la logique du jeu
  useEffect(() => {
    if (!isRunning) return; // Si le jeu est terminé, on ne fait rien
    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = { // Calcul de la nouvelle tête du serpent selon la direction
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Vérification des collisions avec les bords du canevas ou avec le corps du serpent
        const collision =
          newHead.x < 0 || newHead.y < 0 || // Bord gauche ou haut
          newHead.x >= CANVAS_SIZE / SCALE || newHead.y >= CANVAS_SIZE / SCALE || // Bord droit ou bas
          prevSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y); // Collision avec le corps du serpent

        if (collision) {
          setIsRunning(false); // Si collision, fin du jeu
          onGameOver(score); // Envoie le score final à la fonction de callback
          return prevSnake; // Ne modifie pas le serpent
        }

        const ateFood = newHead.x === food.x && newHead.y === food.y; // Vérifie si le serpent mange la nourriture
        const newSnake = [newHead, ...prevSnake]; // Ajoute la nouvelle tête au début du serpent
        if (!ateFood) newSnake.pop(); // Si pas de nourriture mangée, supprime la dernière partie du serpent
        else { // Si nourriture mangée, augmente le score et génère une nouvelle nourriture
          setScore((s) => s + 1);
          setFood(generateFood(newSnake)); // Génére une nouvelle position de nourriture
        }

        return newSnake; // Retourne le serpent mis à jour
      });
    }, 150); // Intervalle de mise à jour du serpent toutes les 150ms

    return () => clearInterval(interval); // Nettoyage de l'intervalle quand le composant est démonté
  }, [direction, food, isRunning, score, onGameOver]); // Dépendances : direction, food, isRunning, score

  // Gestion des entrées clavier pour déplacer le serpent
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 }); // Déplace vers le haut si la direction actuelle n'est pas verticale
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 }); // Déplace vers le bas
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 }); // Déplace vers la gauche
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 }); // Déplace vers la droite
          break;
      }
    };
    window.addEventListener("keydown", handleKey); // Ajoute l'événement de clavier
    return () => window.removeEventListener("keydown", handleKey); // Nettoyage de l'événement
  }, [direction]); // Dépendance : direction du serpent

  // Dessin du serpent et de la nourriture sur le canevas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); // Efface le canevas à chaque mise à jour

    // Dessine le serpent
    ctx.fillStyle = "lime"; // Couleur du serpent
    snake.forEach((s) => {
      ctx.fillRect(s.x * SCALE, s.y * SCALE, SCALE, SCALE); // Dessine chaque segment du serpent
    });

    // Dessine la nourriture
    ctx.fillStyle = "red"; // Couleur de la nourriture
    ctx.fillRect(food.x * SCALE, food.y * SCALE, SCALE, SCALE); // Dessine la nourriture
  }, [snake, food]); // Dépendances : serpent et nourriture

  return (
    <div className="text-center">
      {/* Affichage du canevas avec le serpent et la nourriture */}
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="border border-green-500 bg-black"
      />
      {/* Affichage du score */}
      <div className="mt-2 text-green-400">Score: {score}</div>
    </div>
  );
}

// Fonction pour générer une nouvelle position de la nourriture
function generateFood(snake: { x: number; y: number }[]) {
  let newFood: { x: number; y: number };

  do {
    newFood = {
      x: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)), // Génère une coordonnée x aléatoire
      y: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)), // Génère une coordonnée y aléatoire
    };
  } while (snake.some((seg) => seg.x === newFood.x && seg.y === newFood.y)); // Vérifie que la nourriture ne se trouve pas sur le serpent

  return newFood; // Retourne la position de la nouvelle nourriture
}
