import SkillMedal from "./skill-badges";

const skills = [
  "React",
  "Laravel",
  "PHP",
  "GitHub",
  "CSS",
  "HTML",
  "Tailwind",
  "Supabase",
  "JavaScript",
  "Csharp",
] as const;

const SkillsSection = () => {
  return (
    <section className="rounded-lg text-center text-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-xl mb-3 font-bold">Mes compétences</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
        {skills.map((skill) => (
          <div key={skill} className="flex flex-col items-center">
            <SkillMedal skill={skill} />
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
