import { motion } from 'framer-motion'
import { profile } from '../data/resume'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent mb-3"
        >
          {'// about'}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-3xl md:text-4xl mb-8"
        >
          Building things that hold up in production
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-text-light/70 dark:text-text-dark/70 leading-relaxed"
        >
          <p>
            I'm a full-stack developer based in {profile.location}, currently building
            production platforms at superDNA 3D Lab — everything from real-time 3D
            product configurators to enterprise digital asset management systems used
            by cross-functional teams handling 10,000+ assets.
          </p>
          <p>
            My focus is the full delivery cycle: REST API design, schema modeling
            across both SQL and NoSQL, cloud deployment, and enterprise auth (SAML,
            OAuth 2.0). I care as much about query performance and bundle size as I
            do about the interface a user actually touches.
          </p>
        </motion.div>
      </div>
    </section>
  )
}