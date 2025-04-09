import { useState } from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
        title: "Baccalauréat Général",
        institution: "Lycée du Pays de Retz, Pornic",
        year: "2019 - 2022",
        details: "Spécialités Mathématiques et Physique-Chimie. Acquisition de solides bases en sciences, logique et raisonnement analytique.",
      },
    {
      title: "1ere année de Faculté de Mathématiques",
      institution: "Facultés des Sciences et Techniques, Nantes",
      year: "2022 - 2023",
      details: "Année de licence en mathématiques avec des cours en analyse, algèbre et algorithmie avant de me réorienter vers l’informatique.",
    },
    {
      title: "BTS SIO - SLAM",
      institution: "IIA, St-Nazaire",
      year: "2023 - 2025",
      details: "Formation en développement d'applications, gestion de bases de données, API, et frameworks comme Laravel et React.",
    },
    {
      title: "Futur Parcours",
      institution: "À compléter",
      year: "2025+",
      details: "Possibilité de poursuite en alternance ou autre formation en développement d’applications. L'objectif étant d'avoir un master en développement d'applications",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[200%] mx-auto p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">Mon Parcours</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-[#1E2D3D] border-2 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 hover:shadow-orange-bottom transition-all"
            >
              <span className="font-semibold">{exp.title} - {exp.year}</span>
              <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </button>
            <div
              className={`transition-all overflow-hidden ${
                openIndex === index ? "max-h-96 p-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 underline"><strong>//Établissement :{exp.institution}</strong></p>
              <p className="dark:text-white"><span className="text-[#4D5BCE]">console</span>.log(<span className="text-[#43D9AD]">experience.details</span>)</p>
              <p className="mt-2">{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
