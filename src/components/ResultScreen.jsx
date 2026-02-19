import { CheckCircle2, XCircle, ExternalLink, HelpCircle, ArrowRight } from "lucide-react";

export default function ResultScreen({ scenario, mistakes, onReplay, onMenu }) {
  const perfect = mistakes.length === 0;

  return (
    <div className="grid result-view">
      <div className="card cardPad">
        <div className="resultHeader">
          <div className="resultTitle">
            {perfect ? "🎉 Suurepärane!" : "📌 Tagasiside ja soovitused"}
          </div>
          <div className="resultSub">
            {perfect
              ? "Oled kriisiolukorraks hästi ette valmistunud! Kõik otsused olid kooskõlas soovitustega."
              : "Vaata üle olukorrad, kus oleks saanud teha turvalisema valiku."}
          </div>
        </div>

        <div className="footerRow">
          <button onClick={onReplay} className="primaryBtn">Mängi uuesti</button>
          <button onClick={onMenu} className="ghostBtn">Menüüsse</button>
        </div>
      </div>

      {!perfect && (
        <div className="mistakes-list">
          {mistakes.map((m, idx) => {
            const node = scenario.nodes[m.nodeId];
            const choice = node?.choices?.find(c => c.id === m.choiceId);
            const questionText = node?.text || "Küsimuse tekst puudub";
            const choiceText = choice?.text || "Valik puudub";

            return (
              <div key={`${m.nodeId}-${m.choiceId}-${idx}`} className="card cardPad mistake-card">
                <div className="mistake-row">
                   <div className="mistake-icon"><HelpCircle size={20} color="var(--muted)" /></div>
                   <div>
                     <div className="small mistake-question">Olukord</div>
                     <div className="mistake-question-text">{questionText}</div>
                   </div>
                </div>

                <div className="mistake-wrong">
                  <div className="small"> <XCircle size={16} /> Sinu valik</div>
                    <div className="choice-text">{choiceText}</div>
                    <div className="small explain-small">Selgitus: {m.explain}</div>
                </div>

                <div className="mistake-correction">
                  <div className="small"> <CheckCircle2 size={16} /> Soovitus</div>
                    <div className="correction-text">{m.correction}</div>

                  {m.sourceUrl && (
                      <div className="source-sep">
                      <a href={m.sourceUrl} target="_blank" rel="noreferrer" className="sourceLink source-compact">
                        Loe lisaks <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {scenario.sources && scenario.sources.length > 0 && (
        <div className="card cardPad">
          <div className="sources-header">
            <ExternalLink size={18} />
            Kasulikud allikad
          </div>
          <div className="sources-list">
            {scenario.sources.map((s) => (
              <a key={s.url} className="sourceLink source-card" href={s.url} target="_blank" rel="noreferrer">
                <span>{s.label}</span>
                <ArrowRight size={16} className="arrow" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
