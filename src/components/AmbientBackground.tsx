const AmbientBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
    <div className="absolute inset-0 bg-[#0c0e14]" />

    {/* Color fields — visible through liquid glass */}
    <div
      className="absolute -top-[20%] -left-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full opacity-70 animate-glow-pulse"
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }}
    />
    <div
      className="absolute top-[30%] -right-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-60 animate-glow-pulse"
      style={{
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
        filter: 'blur(90px)',
        animationDelay: '3s',
      }}
    />
    <div
      className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full opacity-55 animate-glow-pulse"
      style={{
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.35) 0%, transparent 70%)',
        filter: 'blur(85px)',
        animationDelay: '5s',
      }}
    />
    <div
      className="absolute top-[55%] left-[40%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full opacity-40 animate-glow-pulse"
      style={{
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
        filter: 'blur(70px)',
        animationDelay: '7s',
      }}
    />
  </div>
)

export default AmbientBackground
