import { motion } from 'framer-motion'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent mb-3"
        >
          {'// experience'}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-3xl md:text-4xl mb-16"
        >
          Where I've built
        </motion.h2>

        <div className="relative">
          {/* the strung thread running down the timeline */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            style={{ originY: 0 }}
            className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-thread-light dark:bg-thread-dark"
          />

          <div className="space-y-16">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-10"
              >
                {/* node on the thread */}
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-bg-light dark:bg-bg-dark border-2 border-accent" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-xl">{job.role}</h3>
                  <span className="font-mono text-xs text-text-light/50 dark:text-text-dark/50">
                    {job.period}
                  </span>
                </div>

                <p className="text-accent text-sm mb-4">
                  {job.company} — {job.location}
                </p>

                <ul className="space-y-2">
                  {job.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-text-light/70 dark:text-text-dark/70 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-accent/50"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}