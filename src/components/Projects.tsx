import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText, Heart, Factory, GraduationCap, BookOpen, Building2, Award, Home, Plane, Car } from "lucide-react";

const projects = [
  {
    title: "The Knowledge Academy",
    subtitle: "E-Learning LMS Platform",
    description:
      "Redesigned dashboards, quizzes, exam timers, course pages, and certificate layouts. Delivered major performance improvements and converted Figma designs into pixel-perfect UI.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Moodle", "AJAX"],
    icon: GraduationCap,
    gradient: "from-primary to-accent",
    url: "https://elearning.theknowledgeacademy.com",
  },
  {
    title: "MPES E-Learning",
    subtitle: "Professional Training LMS",
    description:
      "UI overhaul of course pages, dashboards, quizzes, and enrollment pages. Built responsive certificate designs and improved platform performance through CSS/JS optimization.",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Moodle"],
    icon: BookOpen,
    gradient: "from-accent to-primary",
    url: "https://elearning.mpes.co.uk/",
  },
  {
    title: "Oakwood International",
    subtitle: "Corporate Training LMS",
    description:
      "Redesigned course structure UI, sidebar navigation, dashboards, and quiz layout. Implemented exam timer UI and ensured cross-browser compatibility.",
    tech: ["HTML5", "CSS", "JavaScript", "jQuery", "AJAX", "Bootstrap"],
    icon: Building2,
    gradient: "from-primary via-accent to-primary",
    url: "https://lms.oakwoodinternational.co.uk/",
  },
  {
    title: "Global Certification Board",
    subtitle: "Online Examination System",
    description:
      "Designed exam-taking interface, question navigation, and timer UI. Improved accessibility, responsiveness, and enhanced certificate page layout.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Moodle"],
    icon: Award,
    gradient: "from-accent via-primary to-accent",
    url: "https://exam.globalcertificationboard.com/",
  },
  {
    title: "24 Efiling",
    subtitle: "Tax & Compliance Platform",
    description:
      "Built user-facing website UI and admin panel for managing users & service requests. Collaborated with PM & clients for continuous improvements.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    icon: FileText,
    gradient: "from-primary to-accent",
    url: "https://24efiling.com",
  },
  {
    title: "RealtyNow",
    subtitle: "Real Estate Platform",
    description:
      "Developed responsive UI for property listings, search filters, and booking forms. Optimized performance and ensured cross-device compatibility.",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    icon: Home,
    gradient: "from-accent to-primary",
    url: "https://realtynow.in/",
  },
  {
    title: "Happy U",
    subtitle: "Health Booking & Consultation Hub",
    description:
      "Developed responsive UI with performance optimization. Supported SEO implementation and backend integration for seamless user experience.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    icon: Heart,
    gradient: "from-primary via-accent to-primary",
    url: "https://happyu.co.in/",
  },
  {
    title: "MyDriver",
    subtitle: "Driver Booking & Fleet Management",
    description:
      "Built admin UI screens for driver management, customer records, and booking workflows. Designed responsive dashboards with metrics and charts.",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "jQuery", "AJAX"],
    icon: Car,
    gradient: "from-accent via-primary to-accent",
    url: "https://mydriver.co.in/",
  },
  {
    title: "Prakash Enterprises",
    subtitle: "Industrial Supplier Website",
    description:
      "Built responsive pages with interactive components. Ensured mobile-friendly layouts using media queries for optimal viewing across devices.",
    tech: ["HTML5", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    icon: Factory,
    gradient: "from-primary to-accent",
  },
  {
    title: "Docomo Holidays",
    subtitle: "Travel & Holiday Booking Platform",
    description:
      "Designed and built the entire UI for holiday packages, cruise listings, hotel pages, and booking workflows with interactive components.",
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    icon: Plane,
    gradient: "from-accent to-primary",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding gradient-hero" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured
            <br />
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my frontend development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-1 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
                    >
                      View Details
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
