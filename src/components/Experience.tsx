import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "UI Developer",
    company: "The Knowledge Academy",
    period: "Dec 2024 – Present",
    description: [
      "Created responsive web interfaces from Figma designs using HTML, CSS, JS, jQuery",
      "Improved UX for Moodle-based e-learning features like course enrollment and dashboards",
      "Implemented updates based on user feedback",
      "Collaborated closely with UI/UX designers",
      "Managed platform content via HTML Writer",
    ],
    tech: ["HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap 5"],
  },
  {
    title: "Frontend Developer",
    company: "Realtynow Pvt Ltd",
    period: "Sep 2023 – Sep 2024",
    description: [
      "Built responsive interfaces from Figma for a real estate platform",
      "Improved UX for property filing, booking & search",
      "Ensured design accuracy and responsiveness",
    ],
    tech: ["HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap 5"],
  },
  {
    title: "Frontend Developer",
    company: "Web Digital Mantra",
    period: "Jan 2022 – Sep 2023",
    description: [
      "Built static & dynamic websites",
      "Improved UX in collaboration with backend team",
      "Modified UI based on client feedback",
    ],
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap 5"],
  },
  {
    title: "Frontend Developer",
    company: "Infocampus Logics",
    period: "May 2021 – Dec 2021",
    description: [
      "Created features using HTML, CSS, jQuery, React.js, Node.js, APIs",
      "Built cross-browser compatible websites",
      "Followed compliance standards for UI",
    ],
    tech: ["HTML", "CSS", "jQuery", "React.js", "Node.js", "APIs"],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-background" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Professional
            <br />
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                } md:w-1/2 pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full gradient-bg border-4 border-background shadow-glow ${
                    index % 2 === 0
                      ? "left-0 md:left-auto md:-right-2"
                      : "left-0 md:-left-2"
                  } md:-translate-x-0`}
                />

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <div className={`flex items-center gap-2 text-primary font-medium ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : "text-left"}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
