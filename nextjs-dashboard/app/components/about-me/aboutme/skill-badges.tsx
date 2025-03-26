import { FaReact, FaLaravel, FaPhp, FaGithub, FaNodeJs, FaCss3Alt, FaHtml5, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiGraphql, SiSupabase, SiJavascript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skillIcons = {
  React: <FaReact className="text-blue-400" />,
  Laravel: <FaLaravel className="text-red-500" />,
  PHP: <FaPhp className="text-indigo-500" />,
  GitHub: <FaGithub className="text-gray-300" />,
  NodeJS: <FaNodeJs className="text-green-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  Tailwind: <SiTailwindcss className="text-teal-400" />,
  GraphQL: <SiGraphql className="text-pink-500" />,
  Supabase: <SiSupabase className="text-green-400" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  Csharp: <TbBrandCSharp className="text-yellow-400" />,
  Database: <FaDatabase className="text-blue-600" />,
};

interface SkillMedalProps {
  skill: keyof typeof skillIcons;
}

const SkillMedal: React.FC<SkillMedalProps> = ({ skill }) => {
  return (
    <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full shadow-lg border-2 border-gray-600">
      {skillIcons[skill] || <FaDatabase className="text-white" />}
    </div>
  );
};

export default SkillMedal;
