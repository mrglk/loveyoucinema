import "./ProgressBar.scss";

type ProgressProps = {
  completed: number | null;
};

export default function ProgressBar({ completed }: ProgressProps) {
  return (
    <div className="progress">
      {completed === null ? (
        <div className="progress__inner progress__inner_start">
          <div className="progress__filler progress__filler_start">
            <span className="progress__label progress__label_start">
              Набери 10 правильных ответов подряд, чтобы победить!
            </span>
          </div>
        </div>
      ) : (
        <div className="progress__inner">
          <div style={{ width: `${completed}%` }} className="progress__filler">
            <span className="progress__label">{completed}%</span>
          </div>
        </div>
      )}
    </div>
  );
}
