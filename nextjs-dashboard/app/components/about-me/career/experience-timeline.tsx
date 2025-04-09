import { useState } from "react";
import { useTranslation } from 'react-i18next';

const ExperienceTimeline = () => {
  const experiences = [
    {
        title: "General Baccalaureate",
        institution: "Lycée du Pays de Retz, Pornic",
        year: "2019 - 2022",
        details: "Specializations in Mathematics and Physics-Chemistry. Acquisition of a solid foundation in science, logic and analytical reasoning.",
      },
    {
      title: "1st year of Faculty of Mathematics",
      institution: "Facultés des Sciences et Techniques, Nantes",
      year: "2022 - 2023",
      details: "Bachelor's year in mathematics with courses in analysis, algebra and algorithms before reorienting myself towards computer science.",
    },
    {
      title: "BTS SIO - SLAM",
      institution: "IIA, St-Nazaire",
      year: "2023 - 2025",
      details: "Training in application development, database management, APIs, and frameworks like Laravel and React.",
    },
    {
      title: "Future Course",
      institution: "To complete",
      year: "2025+",
      details: "Possibility of continuing with a work-study program or other training in application development. The goal is to obtain a master's degree in application development.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { t } = useTranslation();

  return (
    <div className="w-[200%] mx-auto p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">{t("My Course")}</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-[#1E2D3D] border-2 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 hover:shadow-orange-bottom transition-all"
            >
              <span className="font-semibold">{t(exp.title)} - {exp.year}</span>
              <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </button>
            <div
              className={`transition-all overflow-hidden ${
                openIndex === index ? "max-h-96 p-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 underline"><strong>//{t("Institution")} :{exp.institution}</strong></p>
              <p className="dark:text-white"><span className="text-[#4D5BCE]">console</span>.log(<span className="text-[#43D9AD]">experience.details</span>)</p>
              <p className="mt-2">{t(exp.details)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
