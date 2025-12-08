import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Palette,
    title: "Pixel Perfect",
    description: "Converting Figma designs into flawless web interfaces",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and excellent user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with designers and backend teams",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Passionate About Creating
            <br />
            <span className="gradient-text">Beautiful Web Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Frontend Developer with <strong className="text-foreground">4+ years of experience</strong> in 
              building responsive websites, UI development, and Figma-to-code conversion. 
              I'm passionate about improving user experience and creating intuitive interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Throughout my career, I've worked on diverse platforms including <strong className="text-foreground">e-learning systems</strong>, 
              <strong className="text-foreground"> real estate platforms</strong>, and <strong className="text-foreground">service portals</strong>. 
              I specialize in React, JavaScript, TypeScript, and modern frontend workflows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and collaborating closely with 
              designers and backend developers to deliver exceptional digital products.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
