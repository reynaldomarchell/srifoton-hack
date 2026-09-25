import QuizPage from "~/components/quiz/quiz-play";
import { api } from "~/trpc/server";

export default async function Quiz({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await api.quiz.getQuiz({ id });
  return (
    <div>
      <QuizPage quizData={data} />
    </div>
  );
}
