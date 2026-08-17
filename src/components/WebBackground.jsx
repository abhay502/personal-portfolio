import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function WebBackground({ className = '' }) {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let width, height, nodes
    let isVisible = true

    const threadColor = theme === 'dark' ? 'rgba(255,255,255,' : 'rgba(20,20,26,'
    const nodeColor = theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(20,20,26,0.3)'

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      const count = Math.floor((width * height) / 18000) // density scales with screen size
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }))
    }

    function draw() {
      if (!isVisible) {
        animationId = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, width, height)

      // move nodes
      if (!prefersReducedMotion) {
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }

      // draw threads between nearby nodes
      const maxDist = 140
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.35
            ctx.strokeStyle = `${threadColor}${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // draw nodes
      ctx.fillStyle = nodeColor
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0 }
    )
    intersectionObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      intersectionObserver.disconnect()
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}