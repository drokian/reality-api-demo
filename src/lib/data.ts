/**
 * Static data layer — reads from src/data/snapshot.json at build time.
 * Replaces Prisma in the demo; no DB dependency.
 */

import snapshotRaw from "../data/snapshot.json";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data = snapshotRaw as any;

/* ------------------------------------------------------------------ */
/*  Observations                                                       */
/* ------------------------------------------------------------------ */

export function getObservations() {
  return (data.observations ?? []).map(normalizeObservation);
}

export function getObservationById(id: number) {
  const obs = (data.observations ?? []).find((o: { id: number }) => o.id === id);
  return obs ? normalizeObservation(obs) : null;
}

/* ------------------------------------------------------------------ */
/*  References                                                         */
/* ------------------------------------------------------------------ */

export function getReferences() {
  return data.references ?? [];
}

export function getReferenceByNumber(num: number) {
  return (data.references ?? []).find((r: { number: number }) => r.number === num) ?? null;
}

/* ------------------------------------------------------------------ */
/*  Hypotheses                                                         */
/* ------------------------------------------------------------------ */

export function getHypotheses() {
  return data.hypotheses ?? [];
}

export function getHypothesisById(id: number) {
  return (data.hypotheses ?? []).find((h: { id: number }) => h.id === id) ?? null;
}

/* ------------------------------------------------------------------ */
/*  Experiments                                                        */
/* ------------------------------------------------------------------ */

export function getExperiments() {
  return data.experiments ?? [];
}

export function getExperimentById(id: number) {
  return (data.experiments ?? []).find((e: { id: number }) => e.id === id) ?? null;
}

/* ------------------------------------------------------------------ */
/*  Analyses                                                           */
/* ------------------------------------------------------------------ */

export function getAnalyses() {
  return data.analyses ?? [];
}

export function getAnalysisById(id: number) {
  return (data.analyses ?? []).find((a: { id: number }) => a.id === id) ?? null;
}

/* ------------------------------------------------------------------ */
/*  Connections & Tags                                                 */
/* ------------------------------------------------------------------ */

export function getConnections() {
  return data.connections ?? [];
}

export function getTags() {
  return data.tags ?? [];
}

/* ------------------------------------------------------------------ */
/*  Counts (for stats / home page)                                     */
/* ------------------------------------------------------------------ */

export function getCounts() {
  return data.counts ?? {
    observations: 0,
    hypotheses: 0,
    experiments: 0,
    analyses: 0,
    references: 0,
    connections: 0,
    tags: 0,
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeObservation(obs: any) {
  return {
    ...obs,
    date: typeof obs.date === "string" ? obs.date : new Date(obs.date).toISOString(),
  };
}
