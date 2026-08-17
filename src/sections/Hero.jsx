import { motion } from 'framer-motion'
import WebBackground from '../components/WebBackground'
import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <WebBackground className="opacity-60 dark:opacity-40" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent mb-4"
        >
          {'// full-stack developer'}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl leading-tight max-w-3xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg text-text-light/70 dark:text-text-dark/70 max-w-xl"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex gap-4"
        >
          
            <a href="#projects"
            className="px-6 py-3 bg-accent text-white rounded-full font-mono text-sm hover:opacity-90 transition-opacity"
          >
            View Work
          </a>
          
            <a href="#contact"
            className="px-6 py-3 border border-thread-light dark:border-thread-dark rounded-full font-mono text-sm hover:border-accent transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}