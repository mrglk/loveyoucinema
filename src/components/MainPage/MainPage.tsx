import "./MainPage.scss";
import Score from "../Score/Score";
import ProgressBar from "../ProgressBar/ProgressBar";
// import filmImage from "../../assets/images/film.png";
import FilmButton from "../FilmButton/FilmButton";
import { film } from "../../film";
import { useState } from "react";

export default function MainPage() {
  const [completed, setCompleted] = useState<number | null>(null);
  // в useEffect приходят данные об одном рандомном паке фильмов
  // навешиваем обработчик события на кнопки +
  // в обработчике проверяем, сооветтвует ли название кнопки названию в правильном ответе
  // если да – setCompleated +10, подсвечиваем кнопку зеленым на несколько секунд, setScore +1, делаем повторный запрос к базе
  // если нет – setCompleated 0, setScore 0, подсвечиваем кнопку красным а правильный ответ зеленым

  const handleClick = (e: any) => {
    console.log(e.target.name);

    if (e.target.name !== film.tru) {
      setCompleted(0);
    } else {
      setCompleted(10);
    }
  };

  return (
    <main className="container">
      <div className="mainPage__inner container__row_wide">
        <div className="mainPage__general">
          <Score />
          <div className="mainPage__film">
            <ProgressBar completed={completed} />
            <div className="mainPage__imgWrapper">
              <img className="mainPage__img" alt="Film" src={film.src} />
            </div>
          </div>
          <Score />
        </div>
        <div className="mainPage__buttons">
          <FilmButton handleClick={(e) => handleClick(e)} name={film.but1} />
          <FilmButton handleClick={(e) => handleClick(e)} name={film.but2} />
          <FilmButton handleClick={(e) => handleClick(e)} name={film.but3} />
          <FilmButton handleClick={(e) => handleClick(e)} name={film.but4} />
        </div>
      </div>
    </main>
  );
}
