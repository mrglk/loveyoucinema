import React from "react";
import "./FilmButton.scss";

type ButtonProps = {
  name: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function FilmButton({ handleClick, name }: ButtonProps) {
  return (
    <button onClick={handleClick} className="button" name={name}>
      {name}
    </button>
  );
}
