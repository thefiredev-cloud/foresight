# Contributing to Foresight OS

## How to Contribute

### Reporting Bugs
Open a GitHub issue with clear reproduction steps and environment details.

### Feature Requests
Open a GitHub issue with the `enhancement` label. Describe the decision-making use case.

### Pull Requests
1. Fork and create a branch: `feat/your-feature` or `fix/your-bug`
2. Add tests for new functionality
3. `npm test` and `npm run lint` must pass
4. Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`
5. Open PR against `main`

### Development Setup
```bash
git clone https://github.com/thefiredev/foresight.git
cd foresight
npm install && pip install -r requirements.txt
cp .env.example .env
docker-compose up -d
npm run dev
```

## Questions?
[Discord](https://discord.gg/thefiredev) or open a GitHub Discussion.
