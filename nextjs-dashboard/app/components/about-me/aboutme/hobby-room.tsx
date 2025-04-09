import { motion } from "framer-motion";
import { FaLaptopCode, FaPencilAlt, FaGamepad, FaMusic } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const hobbies = [
  {
    name: "Dev",
    icon: <FaLaptopCode />,
    color: "bg-blue-500 dark:bg-blue-600",
    desc: "J'adore coder des applications et explorer de nouvelles technos.",
  },
  {
    name: "Drawing",
    icon: <FaPencilAlt />,
    color: "bg-red-500 dark:bg-red-600",
    desc: "Je fais du dessin traditionnel et digital pour exprimer ma créativité.",
  },
  {
    name: "Gaming",
    icon: <FaGamepad />,
    color: "bg-green-500 dark:bg-green-600",
    desc: "Fan de jeux compétitifs et narratifs, j’aime aussi analyser le game design.",
  },
  {
    name: "Music",
    icon: <FaMusic />,
    color: "bg-yellow-400 dark:bg-yellow-500",
    desc: "J'écoute et compose de la musique, toujours en quête de nouvelles inspirations.",
  },
];

const HobbyRoom = () => {

const { t } = useTranslation();

  return (
    <section className="p-6 rounded-lg text-center bg-white dark:bg-[#011627] text-gray-900 dark:text-white transition-colors duration-300">
      <h2 className="text-xl font-bold mb-6">{t("My passions")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className={`w-24 h-24 flex flex-col items-center justify-center rounded-lg shadow-lg cursor-pointer ${hobby.color} text-white`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={hobby.desc}
          >
            <motion.div className="text-4xl">{hobby.icon}</motion.div>
            <motion.p className="text-sm mt-2">{t(hobby.name)}</motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HobbyRoom;
