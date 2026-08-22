import { useEffect, useRef } from 'react'
import fond from '../assets/japon/fond.jpg'
import plan2 from '../assets/japon/2plan.jpg'
import plan1 from '../assets/japon/1plan.png'

export default function Hero() {
  const layer2Ref = useRef<HTMLImageElement>(null)
  const layer1Ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5

      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${x * 40}px, ${y * 25}px, 0) scale(1.1)`
      }
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${x * 70}px, ${y * 45}px, 0) scale(1.18)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative isolate h-[60vh] min-h-80 overflow-hidden bg-[#7a1b22] sm:h-[65vh] sm:min-h-96 md:h-[70vh] md:min-h-105">
      <img
        src={fond}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <img
        ref={layer2Ref}
        src={plan2}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover mix-blend-multiply transition-transform duration-200 ease-out will-change-transform"
      />
      <img
        ref={layer1Ref}
        src={plan1}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply transition-transform duration-200 ease-out will-change-transform"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <h1 className="text-2xl font-bold tracking-wide drop-shadow-lg sm:text-4xl md:text-6xl">
          STYLE JAPONAIS
        </h1>
        <p className="mt-3 max-w-xs text-sm text-white/90 drop-shadow sm:mt-4 sm:max-w-md sm:text-base md:max-w-xl md:text-lg">
          L'élégance du Japon, réinventée pour votre garde-robe.
        </p>
      </div>
    </section>
  )
}
