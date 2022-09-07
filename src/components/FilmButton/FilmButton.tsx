import React from "react";
import "./FilmButton.scss";
import classNames from "classnames";

type ButtonProps = {
  name: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isRight: boolean | null;
  isWrong: boolean | null;
};

export default function FilmButton({
  handleClick,
  name,
  isRight,
  isWrong,
}: ButtonProps) {
  const classButton = classNames("button", {
    button_true: isRight,
    button_false: isWrong,
  });

  // возможно - при размаунтинге компонента подсвечивать кнопки

  return (
    <button onClick={handleClick} className={classButton} name={name}>
      {name}
    </button>
  );
}
