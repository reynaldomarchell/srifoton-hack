import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const quizRouter = createTRPCRouter({
    // Create Quiz
    createQuiz: protectedProcedure
        .input(
            z.object({
                theme: z.string().min(1),
                workingTime: z.number().min(1),
                questions: z.array(
                    z.object({
                        question: z.string().min(1),
                        choices: z.array(z.string().min(1)),
                        answer: z.number().min(0),
                    })
                ),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { theme, questions, workingTime } = input;
            return ctx.db.quiz.create({
                data: {
                    theme,
                    createdBy: { connect: { id: ctx.session.user.id } },
                    totalQuestions: questions.length,
                    workingTime,
                    questions: {
                        create: questions.map((q) => ({
                            question: q.question,
                            choices: q.choices,
                            answer: q.answer,
                        })),
                    },
                },
                include: {
                    questions: true,
                },
            });
        }),

    // Read a specific quiz by ID
    getQuiz: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            return ctx.db.quiz.findUnique({
                where: { id: input.id },
                include: { questions: true },
            });
        }),

    // Read all quizzes
    getAllQuizzes: protectedProcedure.query(async ({ ctx }) => {
        return ctx.db.quiz.findMany({
            where: { createdById: ctx.session.user.id },
            orderBy: { createdAt: 'desc' },
        });
    }),

    // Update a quiz by ID
    updateQuiz: protectedProcedure
        .input(
            z.object({
                id: z.string(),
                theme: z.string().optional(),
                questions: z
                    .array(
                        z.object({
                            question: z.string().min(1),
                            choices: z.array(z.string().min(1)),
                            answer: z.number().min(0),
                        })
                    )
                    .optional(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { id, theme, questions } = input;

            const updatedQuiz = await ctx.db.quiz.update({
                where: { id },
                data: {
                    theme: theme ?? undefined,
                    questions: questions
                        ? {
                            deleteMany: {},
                            create: questions.map((q) => ({
                                question: q.question,
                                choices: q.choices,
                                answer: q.answer,
                            })),
                        }
                        : undefined,
                },
                include: { questions: true },
            });

            return updatedQuiz;
        }),


    // Delete a quiz by ID
    deleteQuiz: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.quiz.delete({
                where: { id: input.id },
            });
            return { success: true };
        }),

    // Start a new quiz attempt
    startQuizAttempt: protectedProcedure
        .input(z.object({ quizId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.quizAttempt.create({
                data: {
                    quiz: { connect: { id: input.quizId } },
                    user: { connect: { id: ctx.session.user.id } },
                    answers: {},
                },
            });
        }),

    // Save quiz answers periodically
    saveQuizSnapshot: protectedProcedure
        .input(z.object({
            quizAttemptId: z.string(),
            answers: z.record(z.number()),
        }))
        .mutation(async ({ ctx, input }) => {
            const { quizAttemptId, answers } = input;

            await ctx.db.quizSnapshot.create({
                data: {
                    quizAttempt: { connect: { id: quizAttemptId } },
                    answers: answers,
                },
            });

            return ctx.db.quizAttempt.update({
                where: { id: quizAttemptId },
                data: { answers: answers },
            });
        }),

    // End quiz attempt
    endQuizAttempt: protectedProcedure
        .input(z.object({
            quizAttemptId: z.string(),
            answers: z.record(z.number()),
            score: z.number(),
        }))
        .mutation(async ({ ctx, input }) => {
            const { quizAttemptId, answers, score } = input;

            return ctx.db.quizAttempt.update({
                where: { id: quizAttemptId },
                data: {
                    answers: answers,
                    score: score,
                    endedAt: new Date(),
                },
            });
        }),

    // Get quiz attempts for a user
    getUserQuizAttempts: protectedProcedure
        .input(z.object({ quizId: z.string().optional() }))
        .query(async ({ ctx, input }) => {
            return ctx.db.quizAttempt.findMany({
                where: {
                    userId: ctx.session.user.id,
                    quizId: input.quizId,
                },
                orderBy: { startedAt: 'desc' },
            });
        }),

    // Get all quiz attempts
    getAllUserQuizAttempts: protectedProcedure.query(async ({ ctx }) => {
        return ctx.db.quizAttempt.findMany({
            where: { userId: ctx.session.user.id, score: { not: null } },
            orderBy: { startedAt: 'desc' },
            include: {
                quiz: {
                    select: { createdAt: true, workingTime: true, totalQuestions: true },
                }
            },
        });
    }),
});