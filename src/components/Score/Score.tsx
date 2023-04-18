import "./Score.scss";
import { getPageLang } from "../../helpers/helpers";

type ScoreProps = {
  score: number;
  isBest?: boolean;
};

export default function Score({ score, isBest }: ScoreProps) {
  const lang = getPageLang();
  return (
    <div className="score">
      <span className="score__count">{score}</span>
      <span className="score__description">
        {isBest ? lang === 'ru' ? "Лучший счет" : 'Best score' : lang === 'ru' ? "Текущий счет" : "Current score"}
      </span>
    </div>
  );
}
