import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, Target, Shield } from 'lucide-react';

const achievements = [
  {
    title: 'Guidewire DEVTrails University Hackathon',
    partner: 'In partnership with EY',
    year: '2026',
    icon: Trophy,
    color: 'primary',
    highlights: [
      {
        label: 'Diamond Tier',
        detail: 'Soar Stage (Phase 3)',
      },
      {
        label: '37th / 4,000+',
        detail: 'Global Ranking',
      },
      {
        label: '2nd Place',
        detail: 'Scale Stage CTF Challenge',
      },
    ],
    skills: ['Cybersecurity', 'Analytical Thinking', 'Problem Solving'],
  },
  {
    title: 'Hyrup Hackathon',
    partner: 'National Level',
    year: '2026',
    icon: Medal,
    color: 'secondary',
    highlights: [
      {
        label: 'Finalist',
        detail: 'Top 50 Nationwide',
      },
      {
        label: '10,000+',
        detail: 'Participants',
      },
    ],
    skills: ['Innovation', 'Technical Excellence', 'Competition'],
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Recognition</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Competitive accomplishments and recognitions in hackathons and technical challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="skill-card group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${achievement.color}/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-${achievement.color}/20 to-${achievement.color}/5 border border-${achievement.color}/20 group-hover:border-${achievement.color}/40 transition-colors`}>
                    <achievement.icon className={`w-6 h-6 text-${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{achievement.partner}</span>
                      <span className="text-primary">•</span>
                      <span className="text-primary font-medium">{achievement.year}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {achievement.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="text-center p-3 rounded-lg bg-muted/30 border border-border/50"
                    >
                      <div className={`text-lg font-bold text-${achievement.color}`}>
                        {highlight.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {highlight.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {achievement.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
