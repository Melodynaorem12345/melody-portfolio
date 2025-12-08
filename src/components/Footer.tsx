import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a href="#" className="text-xl font-bold gradient-text">
            Melody.
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Melody Naorem. Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> in Bengaluru
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
