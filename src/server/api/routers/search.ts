import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const searchRouter = createTRPCRouter({
  searchQuery: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return `${input.text}`;
    }),
});
