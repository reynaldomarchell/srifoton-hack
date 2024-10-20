import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const communityRouter = createTRPCRouter({
    // List all community quizzes
    getCommunityQuizzes: publicProcedure
        .query(async ({ ctx }) => {
            return ctx.db.quiz.findMany({
                where: {
                    isPublic: true,
                },
                include: {
                    createdBy: true,
                },
                orderBy: {
                    createdAt: "desc"
                },
            });
        }),

    // Verify a quiz by an expert
    verifyQuizByExpert: protectedProcedure
        .input(
            z.object({
                quizId: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            return ctx.db.quiz.update({
                where: { id: input.quizId },
                data: { isVerifiedByExpert: true },
            });
        }),

    // Mark a quiz as generated by AI
    markQuizAsAIGenerated: protectedProcedure
        .input(
            z.object({
                quizId: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            return ctx.db.quiz.update({
                where: { id: input.quizId },
                data: { isGeneratedByAI: true },
            });
        }),
});