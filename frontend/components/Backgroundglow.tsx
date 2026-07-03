export default function BackgroundGlow() {
  return (
    <>
      {/* Top Glow */}
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      {/* Left Glow */}
      <div className="pointer-events-none fixed left-[-180px] top-[280px] -z-10 h-[380px] w-[380px] rounded-full bg-fuchsia-600/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="pointer-events-none fixed right-[-180px] bottom-[120px] -z-10 h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[120px]" />
    </>
  );
}