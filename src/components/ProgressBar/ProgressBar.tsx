import "./ProgressBar.scss";
import { getPageLang } from "../../helpers/helpers";

type ProgressProps = {
  completed: number | null;
  isStart: boolean;
};

export default function ProgressBar({ completed, isStart }: ProgressProps) {
  const lang = getPageLang();

  return (
    <div className="progress">
      <div className="progress__inner">
        {isStart && (
          <div className="progress__label progress__label_start">
            {lang === 'ru' ? 'Набери 10 правильных ответов подряд, чтобы победить!' : 'Get 10 correct answers in a row to win!'}
          </div>
        )}
        <div style={{ width: `${completed}%` }} className="progress__filler">
          {completed !== 0 && (
            <span className="progress__label">{completed}%</span>
          )}
        </div>
      </div>
    </div>
  );
}
