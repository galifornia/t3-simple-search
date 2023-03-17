import { prisma } from "./../../db";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const searchRouter = createTRPCRouter({
  searchQuery: publicProcedure.input(z.string()).query(async ({ input }) => {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          {
            body: {
              contains: input,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: input,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        author: true,
      },
    });
    return posts;
  }),
});
