export interface Decision {
  id: string;
  description: string;
  context: CompanyContext;
  simulationCount: number;
  status: 'queued' | 'running' | 'completed' | 'failed';
  createdAt: Date;
}

export interface CompanyContext {
  companyStage?: 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'growth' | 'public';
  runwayMonths?: number;
  currentMrr?: number;
  teamSize?: number;
  industry?: string;
  additionalContext?: Record<string, unknown>;
}

export interface SimulationResult {
  decisionId: string;
  simulationCount: number;
  distribution: OutcomeDistribution;
  sensitivity: SensitivityAnalysis;
  scenarios: Scenario[];
  completedAt: Date;
}

export interface OutcomeDistribution {
  p10: OutcomeMetrics;
  p50: OutcomeMetrics;
  p90: OutcomeMetrics;
  mean: OutcomeMetrics;
  stdDev: number;
}

export interface OutcomeMetrics {
  revenueImpact: number;
  timeToImpact: number;
  successProbability: number;
  primaryRisks: string[];
}

export interface SensitivityAnalysis {
  variables: VariableSensitivity[];
}

export interface VariableSensitivity {
  name: string;
  impactScore: number;
  direction: 'positive' | 'negative' | 'mixed';
}

export interface Scenario {
  name: 'bull' | 'base' | 'bear';
  probability: number;
  description: string;
  keyAssumptions: string[];
  outcome: OutcomeMetrics;
}
