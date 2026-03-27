import type { FastifyPluginAsync } from 'fastify';

export const libraryRoutes: FastifyPluginAsync = async (app) => {
  app.get('/library', async () => ({ decisions: [] }));
  
  app.post('/library/:id/outcome', async (request, reply) => {
    const { id } = request.params as { id: string };
    // TODO: Record actual outcome for calibration
    return reply.send({ decision_id: id, outcome_recorded: true });
  });
};
