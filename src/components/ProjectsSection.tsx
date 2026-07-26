import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Smartphone, Terminal, Monitor, Shield, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'completed' | 'wip';
  tags: string[];
  problem: string;
  solution: string;
  techStack: string[];
  decisions: string[];
  interviewValue: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 'rapidcover',
    title: 'RapidCover',
    subtitle: 'AI-Powered Parametric Insurance',
    icon: Shield,
    status: 'completed',
    tags: ['FastAPI', 'React', 'XGBoost', 'Redis'],
    problem: 'Q-Commerce delivery partners lack quick, hassle-free income protection when unable to work.',
    solution: 'Built AI-powered parametric income insurance with zero-touch claims processing in ~49 seconds using ML-based risk assessment and automated verification.',
    techStack: ['FastAPI', 'React', 'XGBoost', 'Redis', 'PostgreSQL'],
    decisions: [
      'XGBoost for real-time risk scoring with high accuracy',
      'Redis caching for sub-second claim processing latency',
      'Parametric triggers eliminate manual claim verification',
    ],
    interviewValue: 'Demonstrates end-to-end ML product development, real-time systems, and fintech domain expertise.',
    github: 'https://github.com/Anaswarakorangot/RapidCover',
    live: 'https://rapidcover-frontend.onrender.com',
  },
  {
    id: 'conversavoice',
    title: 'ConversaVoice',
    subtitle: 'Distributed Real-Time Voice AI',
    icon: Terminal,
    status: 'completed',
    tags: ['Python', 'Redis', 'Async', 'Voice AI'],
    problem: 'Voice AI systems suffer from high latency, making conversations feel unnatural.',
    solution: 'Developed distributed real-time voice AI pipeline achieving 1s first-token latency with Redis semantic caching and async processing.',
    techStack: ['Python', 'Redis', 'AsyncIO', 'WebSockets'],
    decisions: [
      'Redis semantic caching for intelligent response reuse',
      'Async pipeline architecture for parallel processing',
      'Streaming responses for perceived low latency',
    ],
    interviewValue: 'Shows distributed systems expertise, latency optimization, and real-time AI pipeline design.',
    github: 'https://github.com/Speech-Synthesis/ConversaVoice',
  },
  {
    id: 'hybrid-ids',
    title: 'Hybrid-IDS-ML-XAI',
    subtitle: 'Explainable Network Security',
    icon: Monitor,
    status: 'completed',
    tags: ['PyTorch', 'FastAPI', 'XAI', 'Security'],
    problem: 'Traditional intrusion detection lacks explainability, making it hard to trust and debug.',
    solution: 'Built network intrusion detection system with ML + Explainable AI achieving 99.56% accuracy on CICIDS2017 dataset with SHAP-based interpretability.',
    techStack: ['PyTorch', 'FastAPI', 'SHAP', 'scikit-learn', 'CICIDS2017'],
    decisions: [
      'Hybrid ensemble approach for robust detection',
      'SHAP integration for model interpretability in security context',
      'FastAPI backend for real-time threat analysis',
    ],
    interviewValue: 'Demonstrates ML in cybersecurity, model explainability, and handling imbalanced datasets.',
    github: 'https://github.com/avkbsurya119/hybrid-ids-ml-xai',
  },
  {
    id: 'closer',
    title: 'Closer',
    subtitle: 'End-to-End Encrypted Chat',
    icon: Smartphone,
    status: 'completed',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    problem: 'Need for secure real-time communication with strong encryption guarantees.',
    solution: 'Built real-time encrypted chat application using RSA-2048 + AES-256-GCM encryption with perfect forward secrecy.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Crypto'],
    decisions: [
      'RSA-2048 for key exchange, AES-256-GCM for message encryption',
      'Socket.io for real-time bidirectional communication',
      'MongoDB for flexible message and user data storage',
    ],
    interviewValue: 'Shows cryptography implementation, real-time systems, and security-first architecture.',
    github: 'https://github.com/avkbsurya119/closer',
  },
  {
    id: 'socialprophet',
    title: 'SocialProphet',
    subtitle: 'AI Content & Forecasting Agent',
    icon: Camera,
    status: 'completed',
    tags: ['Python', 'ML', 'NLP', 'Time-Series'],
    problem: 'Content creators struggle to predict trends and generate engaging content consistently.',
    solution: 'Developed hybrid time-series forecasting and generative content agent combining trend prediction with AI-powered content generation.',
    techStack: ['Python', 'Transformers', 'Prophet', 'NLP'],
    decisions: [
      'Hybrid approach combining statistical and ML forecasting',
      'NLP pipeline for content understanding and generation',
      'Modular agent architecture for extensibility',
    ],
    interviewValue: 'Demonstrates time-series forecasting, NLP, and AI agent development skills.',
    github: 'https://github.com/avkbsurya119/SocialProphet',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <project.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'completed' ? 'status-completed' : 'status-wip'
          }`}>
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground border border-border">
              {tag}
            </span>
          ))}
        </div>

        {/* Problem & Solution Preview */}
        <div className="space-y-3">
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Problem</span>
            <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 space-y-4 border-t border-border pt-4">
          <div>
            <span className="text-xs font-medium text-secondary uppercase tracking-wider">Solution</span>
            <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
          </div>

          <div>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Tech Stack</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs rounded bg-accent/10 text-accent border border-accent/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Engineering Decisions</span>
            <ul className="mt-2 space-y-1.5">
              {project.decisions.map((decision, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  {decision}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Interview Value</span>
            <p className="text-sm text-foreground mt-1">{project.interviewValue}</p>
          </div>

          {(project.github || project.live) && (
            <div className="flex gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted border border-border hover:border-primary/50 text-sm font-medium text-muted-foreground hover:text-primary transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 text-sm font-medium text-primary transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Expand Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border-t border-border"
      >
        {isExpanded ? (
          <>
            <span>Show Less</span>
            <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>View Technical Details</span>
            <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Engineering <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real systems built with engineering rigor — each demonstrating problem-solving and technical depth
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="cyber-outline" size="lg" asChild>
            <a href="https://github.com/avkbsurya119" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
