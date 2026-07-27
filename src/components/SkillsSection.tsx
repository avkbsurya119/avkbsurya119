import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Brain, Smartphone, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'primary',
    skills: [
      { name: 'C++', usage: 'DSA, competitive programming, systems' },
      { name: 'C', usage: 'Systems programming, embedded systems' },
      { name: 'Python', usage: 'AI/ML pipelines, backend, automation' },
      { name: 'Java', usage: 'OOP concepts, enterprise patterns' },
      { name: 'TypeScript', usage: 'Type-safe web development' },
      { name: 'Dart', usage: 'Flutter mobile development' },
    ],
  },
  {
    title: 'Backend & Frameworks',
    icon: Database,
    color: 'secondary',
    skills: [
      { name: 'Node.js', usage: 'Server-side JavaScript runtime' },
      { name: 'Express', usage: 'REST API development' },
      { name: 'FastAPI', usage: 'High-performance Python APIs' },
      { name: 'Socket.io', usage: 'Real-time bidirectional communication' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    icon: Smartphone,
    color: 'accent',
    skills: [
      { name: 'React', usage: 'Modern web applications' },
      { name: 'Flutter', usage: 'Cross-platform mobile apps' },
      { name: 'TailwindCSS', usage: 'Utility-first styling' },
    ],
  },
  {
    title: 'Databases & Tools',
    icon: Wrench,
    color: 'primary',
    skills: [
      { name: 'PostgreSQL', usage: 'Advanced relational database' },
      { name: 'MySQL', usage: 'Relational database management' },
      { name: 'MongoDB', usage: 'NoSQL document storage' },
      { name: 'Redis', usage: 'Caching & real-time data' },
      { name: 'Docker', usage: 'Containerization & deployment' },
      { name: 'Git', usage: 'Version control & collaboration' },
      { name: 'Linux', usage: 'System administration & scripting' },
    ],
  },
  {
    title: 'ML / AI',
    icon: Brain,
    color: 'secondary',
    skills: [
      { name: 'PyTorch', usage: 'Deep learning model training' },
      { name: 'scikit-learn', usage: 'Classical ML algorithms' },
      { name: 'XGBoost', usage: 'Gradient boosting models' },
      { name: 'SHAP', usage: 'Model explainability' },
      { name: 'Autoencoders', usage: 'Unsupervised representation learning' },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit built through real projects and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="skill-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg bg-${category.color}/10`}>
                  <category.icon className={`w-5 h-5 text-${category.color}`} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default
                        ${hoveredSkill === skill.name 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-muted/50 text-muted-foreground hover:bg-muted border border-transparent'
                        }`}
                    >
                      {skill.name}
                    </span>
                    
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg min-w-[200px]"
                      >
                        <p className="text-xs text-muted-foreground whitespace-nowrap">{skill.usage}</p>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-card border-r border-b border-border" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
