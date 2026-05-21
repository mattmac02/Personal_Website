const Footer = () => (
  <footer className="relative mt-8 mx-4 sm:mx-6 mb-6 max-w-6xl lg:mx-auto">
    <div className="liquid-glass px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-zinc-400 relative z-[1]">
        © {new Date().getFullYear()} Matthew MacEachern
      </p>
      <p className="text-sm text-zinc-500 relative z-[1]">
        Built with <span className="text-blue-300">React</span> & <span className="text-emerald-300">Tailwind</span>
      </p>
    </div>
  </footer>
)

export default Footer
