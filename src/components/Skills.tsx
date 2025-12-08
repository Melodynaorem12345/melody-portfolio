import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const frontendSkills = [
  "React.js",
  "TypeScript",
  "ES6",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "AJAX",
  "JSON",
  "Axios",
  "APIs",
  "Responsive Design",
  "OOP",
  "Agile",
];

const otherSkills = ["Git", "Figma"];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding gradient-hero" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Technologies & Tools
            <br />
            <span className="gradient-text">I Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 4+ years of frontend development experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              <span className="gradient-text">Frontend</span> Development
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frontendSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 rounded-full bg-card border border-border/50 shadow-soft text-sm font-medium hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Other Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              <span className="gradient-text">Tools</span> & Others
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 rounded-full gradient-bg text-primary-foreground text-sm font-medium shadow-soft hover:shadow-glow transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
