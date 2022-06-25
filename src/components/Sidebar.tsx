import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-700">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((item) => (
          <Lesson
            key={item.id}
            title={item.title}
            slug={item.slug}
            availableAt={new Date(item.availableAt)}
            type={item.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
