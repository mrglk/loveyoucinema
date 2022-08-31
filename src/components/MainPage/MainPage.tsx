import "./MainPage.scss";
import Score from "../Score/Score";
import ProgressBar from "../ProgressBar/ProgressBar";
import filmImage from "../../assets/images/film.png";
import FilmButton from "../FilmButton/FilmButton";
import { film } from "../../film";

// type MainProps = {
//   film: {};
// };

export default function MainPage() {
  return (
    <main className="container">
      <div className="mainPage__inner container__row_wide">
        <div className="mainPage__general">
          <Score />
          <div className="mainPage__film">
            <ProgressBar completed={20} />
            <div className="mainPage__imgWrapper">
              <img className="mainPage__img" alt="Film" src={film.src} />
            </div>
          </div>
          <Score />
        </div>
        <div className="mainPage__buttons">
          <FilmButton name={film.but1} />
          <FilmButton name={film.but2} />
          <FilmButton name={film.but3} />
          <FilmButton name={film.but4} />
        </div>
      </div>
    </main>
  );
}
