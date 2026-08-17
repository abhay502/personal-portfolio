import { motion } from 'framer-motion'
import { Mail, Link as LinkIcon } from 'lucide-react'
import { profile } from '../data/resume'

export default function Contact() {
  return (
  <>
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent mb-3"
        >
          {'// contact'}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-3xl md:text-4xl mb-6"
        >
          Let's build something
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-light/70 dark:text-text-dark/70 max-w-md mx-auto mb-10"
        >
          Open to full-stack roles and freelance projects. Reach out and I'll get back to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          
            <a href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-mono text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> Email Me
          </a>
          
            <a href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-thread-light dark:border-thread-dark rounded-full font-mono text-sm hover:border-accent transition-colors"
          >
            <LinkIcon size={16} /> LinkedIn
          </a>
        </motion.div>

        <p className="mt-24 font-mono text-xs text-text-light/30 dark:text-text-dark/30">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  </>
  )
}