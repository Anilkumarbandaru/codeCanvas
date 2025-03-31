// import { drizzle } from 'drizzle-orm/neon-http';
// export const db = drizzle(process.env.DATABASE_URL!);

import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!, { fetchOptions: { cache: 'no-store' } });
export const db = drizzle(sql);
