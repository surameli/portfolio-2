import { useState } from "react";
import React from "react";

const skills = [
  { name: "HTML", level: "95", category: "Frontend" },
  { name: "CSS", level: "90", category: "Frontend" },
  { name: "JavaScript", level: "80", category: "Frontend" },
  { name: "React", level: "80", category: "Frontend" },
  { name: "Tailwind CSS", level: "80", category: "Frontend" },
  //   backend
  { name: "Node.js", level: "75", category: "Backend" },
  { name: "Express.js", level: "70", category: "Backend" },
  { name: "MongoDB", level: "70", category: "Database" },
  { name: "SQL", level: "65", category: "Database" },
  // tools
  { name: "Git", level: "85", category: "Tools" },
  { name: "GitHub", level: "80", category: "Tools" },
  { name: "VS Code", level: "90", category: "Tools" },
];
const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

const SkillSection = () => {
    const[activeCategory, setActiveCategory] = useState("All");
  return (
    <section id="Skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md-text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary text-primary"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills
            .filter(skill => activeCategory === "All" || skill.category === activeCategory)
            .map((skill, index) => (
              <div
                key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold ">{skill.name}</h3>
              </div>

              <div className="w-full">
                <div className="bg-secondary/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out]"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                {/* Move this outside */}
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
