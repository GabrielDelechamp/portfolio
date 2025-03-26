import SkillMedal from "./skill-badges";

const skills = ["React", "Laravel", "PHP", "GitHub", "CSS", "HTML", "Tailwind", "Supabase", "JavaScript", "Csharp"] as const;

const SkillsSection = () => {
  return (
    <section className="p-6 text-white rounded-lg shadow-md text-center">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-center">
        {skills.map((skill) => (
          <div className="flex flex-col items-center">
            <SkillMedal key={skill} skill={skill} />
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
