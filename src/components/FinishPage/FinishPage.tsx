// import { useEffect, useRef } from "react";
import "./FinishPage.scss";

export default function FinishPage() {
  return (
    <div className="finishPage container__row_wide">
      <h1 className="finishPage__header">Поздравляем, вы победили!</h1>
      <p className="finishPage__description">
        Поделитесь результатом с друзьями:
      </p>
      <div className="finishPage__share"></div>
    </div>
  );
}
