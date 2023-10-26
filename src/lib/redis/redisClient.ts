//import packages
import { createClient } from 'redis';
import RedisStore from 'connect-redis';
import 'dotenv/config';

//initialise redis client
export const redisClient = createClient({
  url: process.env.REDIS_URL || '',
});

//initialise redis store
export const redisStore = new RedisStore({ client: redisClient });
