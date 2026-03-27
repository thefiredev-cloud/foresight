<div align="center">

# Foresight OS

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/foresight/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/thefiredev/foresight/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/foresight?style=for-the-badge&logo=codecov)](https://codecov.io/gh/thefiredev/foresight)
[![Version](https://img.shields.io/npm/v/@thefiredev/foresight?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@thefiredev/foresight)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Discord](https://img.shields.io/discord/1234567890?style=for-the-badge&logo=discord&label=Discord)](https://discord.gg/thefiredev)

**Run 10,000 simulations before you make the call.**

[Landing Page](https://thefiredev.com/foresight) · [Documentation](https://docs.thefiredev.com/foresight) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/foresight/issues)

</div>

---

## What is Foresight OS?

Foresight OS is a CEO Decision Simulator. Describe any business decision in plain language — a new hire, a pivot, a price change, a market entry — and Foresight runs 10,000 parallel timeline simulations to generate a probability distribution of outcomes before you commit a single dollar or hour.

**See the future before you decide.**

---

## Key Value Props

| | Capability | Impact |
|---|---|---|
| 🔮 | **10,000 parallel simulations** | Statistical confidence, not gut feel |
| 🌍 | **Plain language input** | No model-building, no consultants |
| 📊 | **Probability distributions** | See best case, worst case, median path |
| 🧠 | **Causal reasoning engine** | Understands second and third-order effects |
| ⚡ | **Results in minutes** | Decisions that used to take weeks |
| 📁 | **Decision library** | Build institutional memory for future calls |

---

## Features

### 🗣️ Natural Language Decision Input
- Describe decisions conversationally
- Context-aware: ingests your company data, financials, market position
- Supports structured decision templates (hiring, pricing, M&A, market entry)
- Multi-step decision trees with branching paths

### ⚡ Monte Carlo Simulation Engine
- 10,000+ parallel timeline simulations per decision
- Configurable variable uncertainty ranges
- Dependency graph modeling (what affects what)
- Sensitivity analysis — which variables matter most

### 📈 Outcome Probability Distributions
- Full distribution curves, not just point estimates
- P10 / P50 / P90 outcome bands
- Confidence intervals with explicit assumptions
- Scenario tagging: bull, base, bear

### 🧠 Causal Reasoning
- LLM-powered causal graph construction
- Industry-specific priors built in
- Historical decision outcome database
- Learns from your past decisions over time

### 📁 Decision Library
- Every decision logged with inputs, simulations, actual outcome
- Searchable institutional memory
- Team collaboration — share decision packages
- Audit trail for board and investor review

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Foresight OS                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   Decision Input         Reasoning Layer      Simulation Core    │
│   ┌──────────────┐      ┌─────────────┐      ┌──────────────┐  │
│   │ Natural Lang │─────▶│  Decision   │─────▶│   Causal     │  │
│   │ Structured   │      │  Parser     │      │   Graph      │  │
│   │ Templates    │      │  (LLM)      │      │   Builder    │  │
│   └──────────────┘      └─────────────┘      └──────┬───────┘  │
│                                                       │           │
│                                               ┌───────▼──────┐  │
│   Company Context                             │  Variable     │  │
│   ┌──────────────┐                            │  Extractor    │  │
│   │ Financials   │────────────────────────────│  & Ranker     │  │
│   │ Market Data  │                            └───────┬───────┘  │
│   │ Team Size    │                                    │           │
│   │ Past Perf.   │                            ┌───────▼──────┐  │
│   └──────────────┘                            │  Monte Carlo  │  │
│                                               │  Engine       │  │
│                                               │  (10k runs)   │  │
│                                               └───────┬───────┘  │
│                                                       │           │
│              ┌────────────────────────────────────────┤           │
│              ▼                         ▼              ▼           │
│   ┌────────────────┐        ┌────────────────┐  ┌──────────────┐ │
│   │  Distribution  │        │   Sensitivity  │  │   Decision   │ │
│   │  Renderer      │        │   Analysis     │  │   Library    │ │
│   └────────┬───────┘        └────────┬───────┘  └──────┬───────┘ │
│            │                         │                  │          │
│            └─────────────────────────┴──────────────────┘          │
│                                      │                              │
│                             ┌────────▼───────┐                     │
│                             │   API / UI     │                     │
│                             │   Dashboard    │                     │
│                             └────────────────┘                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat-square&logo=python)](https://www.python.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7.x-DC382D?style=flat-square&logo=redis)](https://redis.io/)
[![NumPy](https://img.shields.io/badge/NumPy-1.26+-013243?style=flat-square&logo=numpy)](https://numpy.org/)
[![Docker](https://img.shields.io/badge/Docker-24+-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)

---

## Getting Started

### Prerequisites

- Node.js 20+
- Python 3.11+ (simulation engine)
- Docker & Docker Compose
- OpenAI API key (or compatible LLM endpoint)

### Quick Start

```bash
# Clone
git clone https://github.com/thefiredev/foresight.git
cd foresight

# Install Node dependencies
npm install

# Install Python dependencies (simulation engine)
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env

# Start infrastructure
docker-compose up -d

# Migrate database
npm run db:migrate

# Start dev server
npm run dev
```

API available at `http://localhost:3001`.

### Run Your First Simulation

```bash
curl -X POST http://localhost:3001/api/v1/decisions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "decision": "Hire 3 senior engineers at $200k each to accelerate our mobile app launch by 6 months",
    "context": {
      "company_stage": "seed",
      "runway_months": 18,
      "current_mrr": 45000,
      "team_size": 12
    },
    "simulations": 10000
  }'
```

---

## API Reference

### Authentication

```
Authorization: Bearer fo_live_xxxxxxxxxxxxxxxxxxxxxxxx
```

### Endpoints

#### `POST /api/v1/decisions`
Submit a decision for simulation.

**Request body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `decision` | string | Yes | Plain-language decision description |
| `context` | object | No | Company context (financials, stage, etc.) |
| `simulations` | number | No | Number of simulations (default: 10000) |
| `variables` | object | No | Override inferred variables |

#### `GET /api/v1/decisions/{id}`
Get simulation status and results.

#### `GET /api/v1/decisions/{id}/distribution`
Get full probability distribution data.

#### `GET /api/v1/decisions/{id}/sensitivity`
Get sensitivity analysis — which variables drive the most variance.

#### `GET /api/v1/library`
List all past decisions.

#### `POST /api/v1/library/{id}/outcome`
Record the actual outcome of a past decision (for calibration).

Full docs at [docs.thefiredev.com/foresight/api](https://docs.thefiredev.com/foresight/api).

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## Security

See [SECURITY.md](./SECURITY.md) or email security@thefiredev.com.

---

## License

MIT © [The Fire Dev LLC](https://thefiredev.com)

---

<div align="center">

Built by **[The Fire Dev LLC](https://thefiredev.com)** — AI decision infrastructure for operators.

[thefiredev.com](https://thefiredev.com) · [Discord](https://discord.gg/thefiredev) · [Twitter/X](https://x.com/thefiredev)

</div>
