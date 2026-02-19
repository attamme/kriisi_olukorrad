export function createInitialState() {
  return {
    mode: "menu",
    scenarioId: null,
    nodeId: null,
    history: [],
    mistakes: []
  };
}

export function startScenario(state, scenario) {
  return {
    ...state,
    mode: "play",
    scenarioId: scenario.id,
    nodeId: scenario.startNode,
    history: [],
    mistakes: []
  };
}

export function getNode(scenario, nodeId) {
  return scenario.nodes?.[nodeId] ?? null;
}

export function applyChoice(state, scenario, choice) {
  const nextNodeId = choice.next ?? null;
  const currentNodeId = state.nodeId;

  const history = [
    ...state.history,
    { nodeId: currentNodeId, choiceId: choice.id, correct: !!choice.correct }
  ];

  const mistakes = choice.correct
    ? state.mistakes
    : [
        ...state.mistakes,
        {
          nodeId: currentNodeId,
          choiceId: choice.id,
          explain: choice.explain || "See valik ei olnud soovituslik.",
          correction: choice.correction || "Soovituslik tegevus on valida ohutum ja ametlike juhistega kooskõlas olev tegevus.",
          sourceUrl: choice.sourceUrl || null
        }
      ];

  const finished = !nextNodeId || !scenario.nodes?.[nextNodeId];

  return {
    ...state,
    history,
    mistakes,
    nodeId: finished ? currentNodeId : nextNodeId,
    mode: finished ? "result" : "play"
  };
}

export function resetToMenu() {
  return createInitialState();
}
