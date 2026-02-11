import { CheckCircle2, XCircle, ExternalLink } from "lucide-react";

export default function ResultScreen({ scenario, mistakes, onReplay, onMenu }) {
  const perfect = mistakes.length === 0;

  return (
    <div className="grid">
      <div className="card cardPad">
        <div className="resultHeader">
          <div className="resultTitle">
            {perfect ? "🎉 Väga hea!" : "📌 Tagasiside"}
          </div>
          <div className="resultSub">
            {perfect
              ? "Tegid kõik valikud kooskõlas turvaliste soovitustega."
              : "Siin on kohad, kus saaks teha paremaid otsuseid. Iga punkti juures on selgitus ja link ametlikule allikale."}
          </div>
        </div>

        <div className="footerRow">
          <button className="primaryBtn" onClick={onReplay}>Mängi uuesti</button>
          <button className="ghostBtn" onClick={onMenu}>Tagasi menüüsse</button>
        </div>
      </div>

      {!perfect ? (
        <div className="card cardPad" style={{ display: "grid", gap: 10 }}>
          {mistakes.map((m, idx) => (
            <div className="mistake" key={`${m.nodeId}-${m.choiceId}-${idx}`}>
              <div className="mistakeTop">
                <span className="badge bad">
                  <XCircle size={16} /> Vale valik
                </span>
                {m.sourceUrl ? (
                  <a className="sourceLink" href={m.sourceUrl} target="_blank" rel="noreferrer">
                    Allikas <ExternalLink size={14} style={{ verticalAlign: "middle" }} />
                  </a>
                ) : null}
              </div>

              <div className="small"><strong>Miks?</strong> {m.explain}</div>
              <div className="small">
                <span className="badge good" style={{ marginRight: 8 }}>
                  <CheckCircle2 size={16} /> Õigem käik
                </span>
                {m.correction}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="card cardPad">
        <div style={{ fontWeight: 900, marginBottom: 8 }}>Ametlikud allikad</div>
        <div style={{ display: "grid", gap: 8 }}>
          {scenario.sources?.map((s) => (
            <a key={s.url} className="sourceLink" href={s.url} target="_blank" rel="noreferrer">
              {s.label} <ExternalLink size={14} style={{ verticalAlign: "middle" }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
