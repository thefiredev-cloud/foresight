import type { Decision, SimulationResult } from '../core/decision.js';

export interface SimulationVariable {
  name: string;
  min: number;
  max: number;
  distribution: 'uniform' | 'normal' | 'lognormal';
  mean?: number;
  stdDev?: number;
}

export interface SimulationConfig {
  variables: SimulationVariable[];
  iterations: number;
  seed?: number;
}

// TODO: Implement Monte Carlo engine (Python subprocess or native)
export async function runSimulations(
  _decision: Decision,
  _config: SimulationConfig
): Promise<SimulationResult> {
  throw new Error('Monte Carlo engine not yet implemented');
}
