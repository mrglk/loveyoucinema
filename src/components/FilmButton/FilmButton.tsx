import "./FilmButton.scss";

type ButtonProps = {
  name: string;
};

export default function FilmButton({ name }: ButtonProps) {
  return <button className="button">{name}</button>;
}
