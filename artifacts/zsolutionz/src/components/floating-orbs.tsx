export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {/* Large primary orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "-15%",
          right: "-10%",
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          animation: "orbDrift 22s ease-in-out infinite",
        }}
      />
      {/* Secondary orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "5%",
          left: "-8%",
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          animation: "orbDrift 28s ease-in-out infinite reverse",
        }}
      />
      {/* Accent orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: "40%",
          left: "40%",
          background: "radial-gradient(circle, rgba(99,179,237,0.04) 0%, transparent 70%)",
          animation: "orbDrift 18s ease-in-out infinite 3s",
        }}
      />
    </div>
  );
}

export function HeroParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 6 + 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: 0,
            animation: `particleDrift ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
