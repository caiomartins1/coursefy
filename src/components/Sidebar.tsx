import { gql, useQuery } from '@apollo/client';
import { Lesson } from './Lesson';

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      availableAt
      id
      lessonType
      slug
      title
    }
  }
`;

interface QueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    type: 'live' | 'class';
  }[];
}
export function Sidebar() {
  const { data } = useQuery<QueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Lessons Schedule
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.type}
            />
          );
        })}
      </div>
    </aside>
  );
}
