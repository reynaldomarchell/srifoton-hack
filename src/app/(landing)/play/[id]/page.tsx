import { api } from "~/trpc/server";
import QuizPage from "../../../../components/quiz/quiz-play";

export default async function Quiz({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await api.quiz.getQuiz({ id });
  return (
    <div>
      <QuizPage className="top-14" quizData={data} />
    </div>
  );
}
