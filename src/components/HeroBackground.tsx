import { FaReact, FaPython, FaAws, FaNodeJs } from 'react-icons/fa'

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    {/* Hero-local color blooms (layered on global ambient) */}
    <div
      className="absolute top-[10%] left-[5%] w-[420px] h-[420px] rounded-full animate-glow-pulse"
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
    />
    <div
      className="absolute bottom-[15%] right-[5%] w-[480px] h-[480px] rounded-full animate-glow-pulse"
      style={{
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.28) 0%, transparent 70%)',
        filter: 'blur(70px)',
        animationDelay: '2s',
      }}
    />
    <div
      className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full animate-glow-pulse"
      style={{
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.22) 0%, transparent 70%)',
        filter: 'blur(55px)',
        animationDelay: '4s',
      }}
    />

    <div className="absolute inset-0 bg-grid opacity-30" />

    <div className="absolute top-[18%] right-[12%] text-blue-400/30 animate-float">
      <FaReact size={48} />
    </div>
    <div className="absolute bottom-[28%] left-[10%] text-emerald-400/28 animate-float" style={{ animationDelay: '1s' }}>
      <FaPython size={44} />
    </div>
    <div className="absolute top-[38%] left-[8%] text-violet-400/25 animate-float" style={{ animationDelay: '2s' }}>
      <FaNodeJs size={40} />
    </div>
    <div className="absolute bottom-[35%] right-[14%] text-amber-400/22 animate-float" style={{ animationDelay: '1.5s' }}>
      <FaAws size={38} />
    </div>

    <div className="absolute w-2 h-2 bg-blue-400/50 rounded-full animate-particle" style={{ left: '12%' }} />
    <div className="absolute w-1.5 h-1.5 bg-violet-400/40 rounded-full animate-particle" style={{ left: '35%', animationDelay: '1.5s' }} />
    <div className="absolute w-1 h-1 bg-emerald-400/45 rounded-full animate-particle" style={{ left: '62%', animationDelay: '2.5s' }} />
    <div className="absolute w-2 h-2 bg-cyan-400/35 rounded-full animate-particle" style={{ left: '82%', animationDelay: '0.8s' }} />
  </div>
)

export default HeroBackground
