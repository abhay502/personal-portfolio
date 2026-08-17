import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent mb-3"
        >
          {'// projects'}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-3xl md:text-4xl mb-12"
        >
          Things I've shipped
        </motion.h2>

        <div className="grid gap-6">
          {projects.map((project, i) => {
            const Wrapper = project.link ? motion.a : motion.div

            return (
              <Wrapper
                key={project.title}
                {...(project.link
                  ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group relative block p-8 rounded-2xl border border-thread-light dark:border-thread-dark
                           bg-surface-light dark:bg-surface-dark
                           hover:border-accent transition-colors duration-300
                           overflow-hidden"
              >
                <svg
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  <motion.path
                    d="M 100 0 L 100 40 L 60 40 L 60 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-accent"
                    initial={{ pathLength: 0 }}
                    whileHover={{ pathLength: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </svg>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-bold text-xl">{project.title}</h3>
                  {project.link && (
                    <ExternalLink
                      size={18}
                      className="text-text-light/40 dark:text-text-dark/40 group-hover:text-accent transition-colors shrink-0 mt-1"
                    />
                  )}
                </div>

                <p className="text-sm text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-thread-light dark:bg-thread-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}