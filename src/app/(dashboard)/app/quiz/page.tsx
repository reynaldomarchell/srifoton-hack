import { headers } from "next/headers";

import { getAllAttempts } from "@/service/attempts";
import { QuizListClient } from "@/components/quiz/quiz-list";
import { api } from "~/trpc/server";
import { type Quiz } from "@prisma/client";

export default async function QuizListServer() {
  const headerList = await headers();
  const domain =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "quizai.rey.mba";

  const data = await api.quiz.getAllQuizzes();
  const { quizData, quizAttemptsMap } = await getAllAttempts<Quiz>({
    quizData: data,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          Your Quiz Collection
        </h1>
        <QuizListClient
          initialQuizzes={quizData}
          initialQuizAttemptsMap={quizAttemptsMap}
          domain={domain}
        />
      </div>
    </main>
  );
}
