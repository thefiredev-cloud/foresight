import Fastify from 'fastify';
import cors from '@fastify/cors';
import { decisionRoutes } from './routes/decisions.js';
import { libraryRoutes } from './routes/library.js';

export async function createServer() {
  const app = Fastify({ logger: true });
  await app.register(cors, { origin: true });
  await app.register(decisionRoutes, { prefix: '/api/v1' });
  await app.register(libraryRoutes, { prefix: '/api/v1' });
  app.get('/health', async () => ({ status: 'ok', service: 'foresight', version: '0.1.0' }));
  return app;
}
