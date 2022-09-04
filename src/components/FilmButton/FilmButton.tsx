import React from "react";
import "./FilmButton.scss";
import classNames from "classnames";

type ButtonProps = {
  name: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isTrue: boolean | null;
};

export default function FilmButton({ handleClick, name, isTrue }: ButtonProps) {
  const classButton = classNames("button", {
    button_true: isTrue === true,
    button_false: isTrue === false,
  });

  // возможно - при размаунтинге компонента подсвечивать кнопки

  return (
    <button onClick={handleClick} className={classButton} name={name}>
      {name}
    </button>
  );
}
