import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

// Curated palette — extend/replace freely, but keep it to 3-4 colors
// for a cohesive look rather than random full-spectrum noise.
const PALETTE = [
  { r: 230, g: 57, b: 70 },   // accent crimson (#E63946)
  { r: 76, g: 141, b: 255 },  // electric blue
  { r: 168, g: 85, b: 247 },  // violet
]

export default function WebBackground({ className = '' }) {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let width, height, nodes
    let isVisible = true
    let mouse = { x: -9999, y: -9999 }

    const baseAlpha = theme === 'dark' ? 1 : 0.75
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      const count = Math.floor((width * height) / 16000)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      }))
    }

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function onPointerLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    function draw() {
      if (!isVisible) {
        animationId = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, width, height)

      if (!prefersReducedMotion) {
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }

      // threads: blend the two endpoint colors, brighten near the cursor
      const maxDist = 140
      const mouseRadius = 220

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const midX = (a.x + b.x) / 2
            const midY = (a.y + b.y) / 2
            const distToMouse = Math.hypot(midX - mouse.x, midY - mouse.y)
            const mouseBoost = Math.max(0, 1 - distToMouse / mouseRadius)

            const opacity = ((1 - dist / maxDist) * 2 + mouseBoost * 0.35) * baseAlpha
            const r = Math.round((a.color.r + b.color.r) / 2)
            const g = Math.round((a.color.g + b.color.g) / 2)
            const bCol = Math.round((a.color.b + b.color.b) / 2)

            ctx.strokeStyle = `rgba(${r},${g},${bCol},${opacity})`
            ctx.lineWidth = 1.3 + mouseBoost * 0.8
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes: colored, glow bigger near cursor
      for (const n of nodes) {
        const distToMouse = Math.hypot(n.x - mouse.x, n.y - mouse.y)
        const mouseBoost = Math.max(0, 1 - distToMouse / mouseRadius)
        const radius = 2 + mouseBoost * 2.5
        const alpha = (0.5 + mouseBoost * 0.5) * baseAlpha

        ctx.fillStyle = `rgba(${n.color.r},${n.color.g},${n.color.b},${alpha})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0 }
    )
    intersectionObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
      intersectionObserver.disconnect()
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  )
}