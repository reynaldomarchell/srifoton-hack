"use client";

import type { Quiz } from "@prisma/client";
import { LoaderCircle, Share2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

export function ShareButton({ quiz, domain }: { quiz: Quiz; domain: string }) {
  const handleShareClick = () => {
    const shareText = `https://${domain}/play/${quiz.id}`;
    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        toast.success("Copied to clipboard", {
          description: shareText,
        });
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard");
      });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={handleShareClick}
      aria-label={`Share ${quiz.theme} quiz`}
    >
      <Share2 className="h-4 w-4" />
    </Button>
  );
}

export function DeleteButton({ quiz }: { quiz: Quiz }) {
  const router = useRouter();
  const { mutate, isPending } = api.quiz.deleteQuiz.useMutation({
    onSuccess: () => {
      toast.success("Quiz deleted successfully");
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <Button
      variant="destructive"
      size="icon"
      className="transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={() => {
        mutate({ id: quiz.id });
      }}
      disabled={isPending}
      aria-label={`Delete ${quiz.theme} quiz`}
    >
      {isPending ? (
        <LoaderCircle className="h-4 w-4 animate-spin" />
      ) : (
        <Trash2 className="h-4 w-4" />
      )}
    </Button>
  );
}
