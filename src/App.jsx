import { useMemo, useReducer } from "react";
import MobileShell from "./components/MobileShell.jsx";
import TopBar from "./components/TopBar.jsx";
import ScenarioCard from "./components/ScenarioCard.jsx";
import DialogueCard from "./components/DialogueCard.jsx";
import ChoiceButton from "./components/ChoiceButton.jsx";
import ProgressDots from "./components/ProgressDots.jsx";
import ResultScreen from "./components/ResultScreen.jsx";

import { scenarios, getScenarioById } from "./data/scenarios.index.js";
import {
  applyChoice,
  createInitialState,
  getNode,
  resetToMenu,
  startScenario
} from "./game/engine.js";

function reducer(state, action) {
  switch (action.type) {
    case "START": {
      return startScenario(state, action.scenario);
    }
    case "CHOOSE": {
      return applyChoice(state, action.scenario, action.choice);
    }
    case "MENU": {
      return resetToMenu();
    }
    case "RESTART": {
      return startScenario(state, action.scenario);
    }
    default:
      return state;
  }
}

function getNodeOrder(scenario) {
  // Basic “progress” estimate: follow the first choice chain.
  // (This keeps UI simple; later you can make it smarter.)
  const visited = new Set();
  const order = [];
  let id = scenario.startNode;

  while (id && scenario.nodes?.[id] && !visited.has(id) && order.length < 12) {
    visited.add(id);
    order.push(id);

    const node = scenario.nodes[id];
    const next = node.choices?.[0]?.next;
    if (!next) break;
    id = next;
  }
  return order;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, createInitialState);

  const scenario = useMemo(() => {
    if (!state.scenarioId) return null;
    return getScenarioById(state.scenarioId);
  }, [state.scenarioId]);

  const node = useMemo(() => {
    if (!scenario || !state.nodeId) return null;
    return getNode(scenario, state.nodeId);
  }, [scenario, state.nodeId]);

  const progressOrder = useMemo(() => {
    if (!scenario) return [];
    return getNodeOrder(scenario);
  }, [scenario]);

  const activeIndex = useMemo(() => {
    if (!scenario || !state.nodeId) return 0;
    const i = progressOrder.indexOf(state.nodeId);
    return i >= 0 ? i : 0;
  }, [scenario, state.nodeId, progressOrder]);

  const headerTitle =
    state.mode === "menu" ? "Kriisiolukorrad" : (scenario?.title ?? "Kriisiolukorrad");

  const headerSub =
    state.mode === "menu"
      ? "Vali stsenaarium. Mäng kestab ~5–7 min."
      : "Tee valikuid ja õpi turvalisi samme.";

  const rightPill =
    state.mode === "menu"
      ? null
      : scenario?.timeMinutes
        ? `${scenario.timeMinutes} min`
        : null;

  return (
    <MobileShell>
      <TopBar
        mode={state.mode}
        title={headerTitle}
        subtitle={headerSub}
        rightPill={rightPill}
        onHome={() => dispatch({ type: "MENU" })}
        onRestart={() => scenario && dispatch({ type: "RESTART", scenario })}
      />

      <div className="container">
        {state.mode === "menu" ? (
          <div className="grid">
            <div className="card cardPad">
              <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 6 }}>
                Õpi kriisides tegutsema (mobiilimäng)
              </div>
              <div className="small" style={{ lineHeight: 1.4 }}>
                Valikud on lühikesed ja aruteluks sobivad. Pärast stsenaariumi saad tagasiside + ametlikud lingid.
              </div>
            </div>

            {scenarios.map((s) => (
              <ScenarioCard
                key={s.id}
                scenario={s}
                onClick={() => dispatch({ type: "START", scenario: s })}
              />
            ))}

            <div className="card cardPad">
              <div className="small" style={{ lineHeight: 1.4 }}>
                Allikad põhinevad Eesti ametlikel valmisoleku materjalidel:
                {" "}
                <a className="sourceLink" href="https://www.olevalmis.ee" target="_blank" rel="noreferrer">
                  olevalmis.ee
                </a>
                {" "}
                ja
                {" "}
                <a className="sourceLink" href="https://www.kriis.ee" target="_blank" rel="noreferrer">
                  kriis.ee
                </a>
                .
              </div>
            </div>
          </div>
        ) : null}

        {state.mode === "play" && scenario && node ? (
          <div className="grid">
            <DialogueCard text={node.text} />

            <ProgressDots total={Math.max(progressOrder.length, 3)} activeIndex={activeIndex} />

            <div className="choiceList">
              {node.choices.map((c, idx) => (
                <ChoiceButton
                  key={c.id}
                  letter={String.fromCharCode(65 + idx)}
                  text={c.text}
                  onClick={() => dispatch({ type: "CHOOSE", scenario, choice: c })}
                />
              ))}
            </div>

            <div className="card cardPad">
              <div className="small" style={{ display: "grid", gap: 8 }}>
                <div><strong>Stsenaarium:</strong> {scenario.title}</div>
                <div><strong>Eesmärk:</strong> {scenario.intro}</div>
              </div>
            </div>
          </div>
        ) : null}

        {state.mode === "result" && scenario ? (
          <ResultScreen
            scenario={scenario}
            mistakes={state.mistakes}
            onReplay={() => dispatch({ type: "RESTART", scenario })}
            onMenu={() => dispatch({ type: "MENU" })}
          />
        ) : null}
      </div>
    </MobileShell>
  );
}
