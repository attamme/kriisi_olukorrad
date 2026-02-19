import { ChevronRight, Flame, Droplet, Zap, Siren, CloudLightning } from "lucide-react";

const iconMap = {
  electricity: Zap,
  water: Droplet,
  shelter: Siren,
  storm: CloudLightning,
  war: Flame
};

export default function ScenarioCard({ scenario, onClick }) {
  const Icon = iconMap[scenario.id] || ChevronRight;

  return (
    <div className="card scenarioCard" onClick={onClick} role="button" tabIndex={0}>
      <div className="scenario-card-inner">
        <div className="scenario-card-info">
          <div className="scenarioTitle">{scenario.title}</div>
          <div className="small">{scenario.intro}</div>
        </div>
        <div className="avatar" aria-hidden>
          <Icon size={18} />
        </div>
      </div>

      <div className="scenarioMeta">
        <span className="tag">
          ⏱ {scenario.timeMinutes} min
        </span>
        <span className="tag">
          🎚 {scenario.difficulty}
        </span>
      </div>
    </div>
  );
}
