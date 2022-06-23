import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';

interface Props {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, type }: Props) {
  const isLessonAvailable = isPast(availableAt);

  const formatedAvailableDate = format(
    availableAt,
    "EEEE' • 'd' of 'MMMM' • 'k'h'mm"
  );

  return (
    <a href="#">
      <span className="text-gray-300">{formatedAvailableDate}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 flex items-center gap-2">
              <CheckCircle size={20} />
              Content Available
            </span>
          ) : (
            <span className="text-sm text-orange-500 flex items-center gap-2">
              <Lock size={20} />
              Soon Available
            </span>
          )}
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {title === 'live' ? 'LIVE' : 'LESSON'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  );
}
