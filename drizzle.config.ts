// import 'dotenv/config';
// import { defineConfig } from 'drizzle-kit';

// export default defineConfig({

//     schema: './configs/schema.ts',
//     dialect: 'postgresql',
//     dbCredentials: {
//         url: process.env.DATABASE_URL!,
//     },
// });

import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config();

export default defineConfig({
    schema: './configs/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
    },
});
