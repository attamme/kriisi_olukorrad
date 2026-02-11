import { electricity } from "./scenarios/electricity.js";
import { water } from "./scenarios/water.js";
import { storm } from "./scenarios/storm.js";
import { shelter } from "./scenarios/shelter.js";
import { war } from "./scenarios/war.js";

export const scenarios = [electricity, water, shelter, storm, war];

export function getScenarioById(id) {
  return scenarios.find((s) => s.id === id) || null;
}
