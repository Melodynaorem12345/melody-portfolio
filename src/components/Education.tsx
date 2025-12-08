import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Building2, Calendar } from "lucide-react";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-background" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Academic
            <br />
            <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-glow mb-6 mx-auto">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Degree */}
            <h3 className="text-2xl font-bold text-center mb-2">
              Bachelor of Engineering (B.E)
            </h3>

            {/* Institution */}
            <div className="flex items-center justify-center gap-2 text-primary font-medium mb-4">
              <Building2 size={18} />
              <span>Alva's Institute of Engineering & Technology</span>
            </div>

            {/* Location */}
            <p className="text-center text-muted-foreground mb-4">
              Mangalore, Karnataka
            </p>

            {/* Duration */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Calendar size={16} />
              <span>2017 – 2021</span>
            </div>

            {/* University */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-center text-sm text-muted-foreground">
                <span className="font-medium text-foreground">University:</span>{" "}
                Visvesvaraya Technological University (VTU), Belgaum
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
