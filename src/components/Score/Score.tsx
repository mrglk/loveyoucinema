import "./Score.scss";

type ScoreProps = {
  score: number;
};

export default function Score({ score }: ScoreProps) {
  return (
    <div className="score">
      <div className="score__count">{score}</div>
      <span className="score__description">Score</span>
    </div>
  );
}
