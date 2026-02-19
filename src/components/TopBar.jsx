import { Shield, Timer, Home, RotateCcw } from "lucide-react";

export default function TopBar({
  mode,
  title,
  subtitle,
  rightPill,
  onHome,
  onRestart,
}) {
  return (
    <div className="topbar">
      <div className="brand">
        <div className="avatar" aria-hidden>
          <Shield size={18} />
        </div>
        <div>
          <div className="brandTitle">{title}</div>
          <div className="brandSub">{subtitle}</div>
        </div>
      </div>

      <div className="topbar-actions">
        {rightPill ? (
          <span className="pill">
            <Timer size={16} />
            {rightPill}
          </span>
        ) : null}

        {mode !== "menu" ? (
          <button className="ghostBtn" onClick={onHome} title="Menu">
            <Home size={18} />
          </button>
        ) : null}

        {mode === "result" ? (
          <button className="ghostBtn" onClick={onRestart} title="Restart">
            <RotateCcw size={18} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
