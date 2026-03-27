import type { FastifyPluginAsync } from 'fastify';

export const decisionRoutes: FastifyPluginAsync = async (app) => {
  app.post('/decisions', async (request, reply) => {
    // TODO: Parse decision, build causal graph, queue simulations
    return reply.code(202).send({ decision_id: 'placeholder', status: 'queued', simulations: 10000 });
  });

  app.get('/decisions/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    return reply.send({ decision_id: id, status: 'processing', progress: 0 });
  });

  app.get('/decisions/:id/distribution', async (request, reply) => {
    const { id } = request.params as { id: string };
    // TODO: Return probability distribution data
    return reply.send({ decision_id: id, distribution: null });
  });

  app.get('/decisions/:id/sensitivity', async (request, reply) => {
    const { id } = request.params as { id: string };
    // TODO: Return sensitivity analysis
    return reply.send({ decision_id: id, sensitivity: null });
  });
};
