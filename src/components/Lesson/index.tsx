import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export default function Lesson({
  title,
  slug,
  availableAt,
  type,
}: LessonProps) {
  const { slug: slugRouter } = useParams<{ slug: string }>();
  const isLessonAvailabe = new Date(availableAt) < new Date();
  const availableAtFormated = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  }).format(new Date(availableAt));

  const isActiveLesson = slug === slugRouter;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableAtFormated}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson ? "bg-green-500" : ""
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailabe ? (
            <span
              className={`text-sm font-medium flex items-center gap-2 ${
                isActiveLesson ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`text-xs rounded px-2 py-[0.125rem] text-white border  font-bold ${
              isActiveLesson ? "border-white" : "border-green-300"
            }`}
          >
            {type === "live" ? "Ao Vivo" : "Aula Prática"}
          </span>
        </header>

        <strong
          className={`mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-200"
          }`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
