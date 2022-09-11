import "./ProgressBar.scss";

type ProgressProps = {
  completed: number | null;
  isStart: boolean;
};

export default function ProgressBar({ completed, isStart }: ProgressProps) {
  return (
    <div className="progress">
      <div className="progress__inner">
        {isStart && (
          <div className="progress__label progress__label_start">
            Набери 10 правильных ответов подряд, чтобы победить!
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
