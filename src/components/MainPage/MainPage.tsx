import "./MainPage.scss";
import Score from "../Score/Score";
import ProgressBar from "../ProgressBar/ProgressBar";
// import filmImage from "../../assets/images/film.png";
import FilmButton from "../FilmButton/FilmButton";
// import { film } from "../../film";
import { useState, useEffect } from "react";
import { fetchFilm } from "../../store";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const filmData = useAppSelector((state: any) => state.film.film);
  const filmsCollection = [
    filmData.but1,
    filmData.but2,
    filmData.but3,
    filmData.but4,
  ];
  const trueFilm = filmData.tru;

  const [completed, setCompleted] = useState<number | null>(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [right, setRight] = useState<number | null>(null);
  const [wrong, setWrong] = useState<number | null>(null);

  useEffect(() => {
    // document.cookie = "lang=en";
    dispatch(fetchFilm());

    let localBestScore = Number(localStorage.getItem("bestScore"));
    setBestScore(localBestScore);
  }, [dispatch]);

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    const target = (e.target as HTMLButtonElement).name;
    const indexOfTarget = filmsCollection.indexOf(target);
    const indexOfRightFilm = filmsCollection.indexOf(trueFilm);

    if (target !== trueFilm) {
      setRight(indexOfRightFilm);
      setWrong(indexOfTarget);
      removeProgress();
      setCurrentScore(0);

      setTimeout(() => {
        setRight(null);
        setWrong(null);
        dispatch(fetchFilm());
      }, 2000);
    } else {
      setRight(indexOfTarget);
      addProgress();
      setCurrentScore((currentScore) => currentScore + 1);

      setTimeout(() => {
        setRight(null);
        dispatch(fetchFilm());
      }, 2000);
    }
  };

  const addProgress = () => {
    let width = completed === null ? 0 : completed;
    let targetWidth = completed === null ? 10 : completed + 10;
    let id = setInterval(() => addOnePercentOfProgress(), 20);

    const addOnePercentOfProgress = () => {
      if (width === targetWidth) {
        clearInterval(id);
      } else {
        setCompleted((completed) => (completed === null ? 1 : completed + 1));
        width++;
      }
    };
  };

  const removeProgress = () => {
    let width = completed;
    let id = setInterval(() => removeOnePercentOfProgress(), 20);

    const removeOnePercentOfProgress = () => {
      if (width === 0 || width === null) {
        clearInterval(id);
      } else {
        setCompleted((completed) => (completed === null ? 0 : completed - 1));
        width--;
      }
    };
  };

  // const highlightRightButton = (filmName: string) => {
  //   // const target = (e.target as HTMLButtonElement).name;
  //   const indexOfTarget = filmsCollection.indexOf(filmName);
  //   const indexOfRightFilm = filmsCollection.indexOf(trueFilm);
  // };

  // при изменении текущего счета кладем в локал
  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
      localStorage.setItem("bestScore", JSON.stringify(currentScore));
    }
  }, [currentScore, bestScore]);

  // обнуление score и progress bar
  useEffect(() => {
    if (currentScore === 10) {
      console.log(currentScore);
      setTimeout(() => {
        setCompleted(0);
        setCurrentScore(0);
      }, 1000);
    }
  }, [currentScore]);

  return (
    <main className="container">
      <div className="mainPage__inner container__row_wide">
        <div className="mainPage__general">
          <Score score={currentScore} />
          <div className="mainPage__film">
            <ProgressBar completed={completed} />
            <div className="mainPage__imgWrapper">
              <img className="mainPage__img" alt="Film" src={filmData.src} />
            </div>
          </div>
          <Score score={bestScore} />
        </div>
        <div className="mainPage__buttons">
          {filmsCollection.map((film, i) => (
            <FilmButton
              key={i}
              handleClick={(e) => handleClick(e)}
              name={film}
              isRight={right === i}
              isWrong={wrong === i}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
