import "./MainPage.scss";
import Score from "../Score/Score";
import ProgressBar from "../ProgressBar/ProgressBar";
import FilmButton from "../FilmButton/FilmButton";
import { useState, useEffect, useRef } from "react";
import { FilmState, fetchFilm } from "../../store";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

type MainProps = {
  lang: string;
};

export const MainPage = ({ lang }: MainProps) => {
  const nodeRef = useRef<any>(null);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const filmData = useAppSelector((state: FilmState) => state.film);
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
    let localBestScore = Number(localStorage.getItem("bestScore"));

    setBestScore(localBestScore);
    dispatch(fetchFilm());
  }, [dispatch, lang]);

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
      }, 3000);
    }
  }, [currentScore]);

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
        if (currentScore === 9) {
          // тут нужно пофиксить то, что счет 10 не показывает
          switchToFinishPage();
        } else {
          setRight(null);
          dispatch(fetchFilm());
        }
      }, 2000);
    }
  };

  const switchToFinishPage = () => {
    navigate("/finish");
  };

  return (
    <div className="mainPage container__row_wide">
      <div className="mainPage__general">
        <div className="mainPage__progress">
          <Score score={currentScore} />
          <ProgressBar completed={currentScore * 10} isStart={startMode} />
          <Score score={bestScore} isBest={true} />
        </div>
        <div className="mainPage__imgWrapper">
          <SwitchTransition mode="out-in">
            <CSSTransition
              nodeRef={nodeRef}
              key={filmData.src}
              addEndListener={(done: () => void) => {
                nodeRef.current.addEventListener("transitionend", done, false);
              }}
              classNames="fade">
              {!filmData.src ? (
                <div></div>
              ) : (
                <img
                  ref={nodeRef}
                  className="mainPage__img"
                  alt="Film"
                  src={filmData.src}
                />
              )}
            </CSSTransition>
          </SwitchTransition>
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
};
