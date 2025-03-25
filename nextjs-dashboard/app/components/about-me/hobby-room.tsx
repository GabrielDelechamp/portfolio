import { motion } from "framer-motion";
import { FaLaptopCode, FaPencilAlt, FaGamepad, FaMusic } from "react-icons/fa";

const hobbies = [
  { name: "Dev", icon: <FaLaptopCode />, color: "bg-blue-500", desc: "J'adore coder des applications et explorer de nouvelles technos." },
  { name: "Dessin", icon: <FaPencilAlt />, color: "bg-red-500", desc: "Je fais du dessin traditionnel et digital pour exprimer ma créativité." },
  { name: "Jeux Vidéo", icon: <FaGamepad />, color: "bg-green-500", desc: "Fan de jeux compétitifs et narratifs, j’aime aussi analyser le game design." },
  { name: "Musique", icon: <FaMusic />, color: "bg-yellow-500", desc: "J'écoute et compose de la musique, toujours en quête de nouvelles inspirations." },
];

const HobbyRoom = () => {
  return (
    <section className="p-6 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-6">Mes Passions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className={`w-24 h-24 flex flex-col items-center justify-center rounded-lg shadow-lg cursor-pointer ${hobby.color}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div className="text-4xl">{hobby.icon}</motion.div>
            <motion.p className="text-sm mt-2">{hobby.name}</motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HobbyRoom;
