export default function ProgressDots({ total = 5, activeIndex = 0 }) {
  const dots = Array.from({ length: total }, (_, i) => i);
  return (
    <div className="progressDots" aria-label="progress">
      {dots.map((i) => (
        <span key={i} className={`dot ${i <= activeIndex ? "active" : ""}`} />
      ))}
    </div>
  );
}
