import SkillMedal from "./skill-badges";

const skills = ["React", "Laravel", "PHP", "GitHub", "CSS", "HTML", "Tailwind", "Supabase", "JavaScript", "Csharp"] as const;

const SkillsSection = () => {
  return (
    <section className=" text-white rounded-lg text-center">
      <h1 className="text-xl mb-3 font-bold">Mes compétences</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
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
