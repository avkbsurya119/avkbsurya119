import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Brain, Cpu, Zap } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'B.Tech CSE',
    description: 'Amrita University (2023-27), Hyderabad',
  },
  {
    icon: Cpu,
    title: 'Distributed Systems',
    description: 'Real-time pipelines, Redis caching, async architectures',
  },
  {
    icon: Code,
    title: 'Backend Engineering',
    description: 'FastAPI, Node.js, Socket.io, PostgreSQL',
  },
  {
    icon: Brain,
    title: 'Applied ML/AI',
    description: 'PyTorch, XGBoost, SHAP explainability',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            How I Think as an <span className="text-gradient">Engineer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">B.Tech CSE student at Amrita University</span> (2023-27),
              based in Hyderabad, with a passion for building scalable real-time systems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My focus areas are <span className="text-primary">Distributed Systems</span>,{' '}
              <span className="text-secondary">Backend Engineering</span>, and{' '}
              <span className="text-accent">Applied ML/AI</span>. I build systems that handle
              real-time data at scale with sub-second latencies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From voice AI pipelines with 1s latency to parametric insurance with 49-second claims —
              I ship production systems that solve real problems. Currently building scalable
              real-time systems and exploring distributed architectures.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Actively Open to Work</span>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="skill-card group"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
