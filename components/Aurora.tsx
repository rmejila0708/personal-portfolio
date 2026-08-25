export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent/30 blur-[120px] animate-aurora-1" />
      <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-accent-2/25 blur-[130px] animate-aurora-2" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent-3/20 blur-[120px] animate-aurora-3" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />
    </div>
  );
}
