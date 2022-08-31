import "./ProgressBar.scss";

type ProgressProps = {
  completed: number;
};

export default function ProgressBar({ completed }: ProgressProps) {
  return (
    <div className="progress">
      <div className="progress__inner">
        <div style={{ width: `${completed}%` }} className="progress__filler">
          <span className="progress__label">{completed}%</span>
        </div>
      </div>
    </div>
  );
}
