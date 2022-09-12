import "./MainPage.scss";
import Score from "../Score/Score";
import ProgressBar from "../ProgressBar/ProgressBar";
import FilmButton from "../FilmButton/FilmButton";
import { useState, useEffect } from "react";
import { FilmState, fetchFilm } from "../../store";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const filmData = useAppSelector((state: FilmState) => state.film);
  console.log(filmData);
  const filmsCollection = [
    filmData.but1,
    filmData.but2,
    filmData.but3,
    filmData.but4,
  ];
  const trueFilm = filmData.tru;

  const [startMode, setStartMode] = useState<boolean>(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [right, setRight] = useState<number | null>(null);
  const [wrong, setWrong] = useState<number | null>(null);

  useEffect(() => {
    // document.cookie = "lang=en";
    let localBestScore = Number(localStorage.getItem("bestScore"));

    setBestScore(localBestScore);
    dispatch(fetchFilm());
  }, [dispatch]);

  const handleClick = (target: string) => {
    const indexOfTarget = filmsCollection.indexOf(target);
    const indexOfRightFilm = filmsCollection.indexOf(trueFilm);

    if (target !== trueFilm) {
      setRight(indexOfRightFilm);
      setWrong(indexOfTarget);
      setCurrentScore(0);

      setTimeout(() => {
        setRight(null);
        setWrong(null);
        dispatch(fetchFilm());
      }, 2000);
    } else {
      setStartMode(false);
      setRight(indexOfTarget);
      setCurrentScore((currentScore) => currentScore + 1);

      setTimeout(() => {
        setRight(null);
        dispatch(fetchFilm());
      }, 2000);
    }
  };

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
      localStorage.setItem("bestScore", JSON.stringify(currentScore));
    }
  }, [currentScore, bestScore]);

  useEffect(() => {
    if (currentScore === 10) {
      setTimeout(() => {
        setCurrentScore(0);
      }, 1000);
    }
  }, [currentScore]);

  console.log(1);
  return (
    <div className="mainPage container__row_wide">
      <div className="mainPage__general">
        <div className="mainPage__progress">
          <Score score={currentScore} />
          <ProgressBar completed={currentScore * 10} isStart={startMode} />
          <Score score={bestScore} isBest={true} />
        </div>
        <div className="mainPage__imgWrapper">
          <img className="mainPage__img" alt="Film" src={filmData.src} />
        </div>
      </div>
      <div className="mainPage__buttons">
        {filmsCollection.map((film, i) => (
          <FilmButton
            key={i}
            handleClick={(e) => handleClick(film)}
            name={film}
            isRight={right === i}
            isWrong={wrong === i}
          />
        ))}
      </div>
    </div>
  );
}
