import "./Score.scss";

type ScoreProps = {
  score: number;
  isBest?: boolean;
};

export default function Score({ score, isBest }: ScoreProps) {
  return (
    <div className="score">
      <span className="score__count">{score}</span>
      <span className="score__description">
        {isBest ? "Лучший счет" : "Текущий счет"}
      </span>
    </div>
  );
}
