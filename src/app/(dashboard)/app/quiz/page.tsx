import { api } from "~/trpc/server";
import { FaStopwatch } from "react-icons/fa";
import { LuBookOpen } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeleteButton, ShareButton } from "./page.client";
import { headers } from "next/headers";

export default async function Component() {
  const data = await api.quiz.getAllQuizzes();
  const headerList = headers();
  const domain =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "quiz-ai.rey.mba";
  console.log(domain);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          Saved Quizzes
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.length === 0 && (
            <div className="flex items-center justify-center text-lg text-muted-foreground">
              No quizzes found, please create one.
            </div>
          )}

          {data.map((quiz) => (
            <Card
              key={quiz.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle>{quiz.theme}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FaStopwatch className="text-primary" />
                    <p>{quiz.totalQuestions} questions</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <LuBookOpen className="text-primary" />
                    <p>{quiz.workingTime} minutes</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link href={`/app/quiz/${quiz.id}`} className="flex-1">
                  <Button className="w-full transition-transform duration-300 ease-in-out hover:scale-105">
                    Start Quiz
                  </Button>
                </Link>
                <Link
                  href={`/app/quiz/${quiz.id}?mode=review`}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    Review
                  </Button>
                </Link>
                <ShareButton quiz={quiz} domain={domain} />
                <DeleteButton quiz={quiz} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
