import { initTRPC } from '@trpc/server'
import { SchemaInput } from './schema/input.schema';
import type { Context } from './context/main';

const t = initTRPC.context<Context>().create()

const publicProcedure = t.procedure
const router = t.router

export const appRouter = router({
    hello: publicProcedure
        .input(SchemaInput)
        .query(async ({ input }) => {
            return {
                resp: `Hello ${input}`,
            }
        })
})

export type AppRouter = typeof appRouter