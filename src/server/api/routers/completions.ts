import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { env } from "~/env";

const openai = createOpenAI({
  apiKey: env.OPEN_API_KEY,
});

export const completionsRouter = createTRPCRouter({
  generateQuiz: protectedProcedure
    .input(
      z.object({
        topic: z.string(),
        totalQuestions: z.number(),
        language: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { topic, totalQuestions, language } = input;

      const result = await generateObject({
        model: openai("gpt-4o-mini"),
        schemaName: "quiz",
        schemaDescription: "Quiz for specific topic.",
        schema: z.object({
          theme: z.string(),
          questions: z.array(
            z.object({
              question: z.string(),
              choices: z.array(z.string()),
              answer: z.number(),
            }),
          ),
        }),
        prompt: `Generate ${totalQuestions} questions about ${topic} using ${language} as language.`,
      });

      return { object: result.object };
    }),
});
