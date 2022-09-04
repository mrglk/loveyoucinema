import "./MainPage.scss";
import Score from "../Score/Score";
import ProgressBar from "../ProgressBar/ProgressBar";
// import filmImage from "../../assets/images/film.png";
import FilmButton from "../FilmButton/FilmButton";
import { film } from "../../film";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [completed, setCompleted] = useState<number | null>(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isTrue, setIsTrue] = useState<boolean | null>(null);
  // const [isWrong, setIsWrong] = useState<boolean  | null>(null);
  // в useEffect приходят данные об одном рандомном паке фильмов
  // навешиваем обработчик события на кнопки +
  // в обработчике проверяем, сооветтвует ли название кнопки названию в правильном ответе +
  // если да – setCompleated +10, подсвечиваем кнопку зеленым на несколько секунд, setScore +1, делаем повторный запрос к базе
  // если нет – setCompleated 0, setScore 0, подсвечиваем кнопку красным а правильный ответ зеленым

  // подтягивать в локал сторадж данные о score и доставать их в bestScore

  const handleClick = (e: any) => {
    console.log(e.target.name);

    if (e.target.name !== film.tru) {
      setCompleted(0);
      setCurrentScore(0);
      // подсветить правильную и неправильную кнопки
      // с таймаутом в несколько секунд делать новый запрос к базе
      // анимация возвращения прогресс бара обратно
    } else {
      let width = completed === null ? 0 : completed;
      let targetWidth = completed === null ? 10 : completed + 10;

      let id = setInterval(() => addProgress(), 20);

      const addProgress = () => {
        if (width === targetWidth) {
          clearInterval(id);
        } else {
          setCompleted((completed) => (completed === null ? 1 : completed + 1));
          width++;
        }
      };

      setCurrentScore((currentScore) => currentScore + 1);
      // подсветить правильную кнопку
      // с таймаутом в несколько секунд делать новый запрос к базе
    }
  };

  const highlightButton = (e: any) => {
    if (e.target.name !== film.tru) {
      // подсветить кнопку красным, а правильную кнопку зеленым
      console.log(2);
    } else {
      // подсветить кнопку зеленым
      console.log(e.target);
      e.target.isTrue = true;
      console.log(e.target.isTrue);
    }
  };

  useEffect(() => {
    // забираем и кладем в локал сторадж
    let localBestScore = Number(localStorage.getItem("bestScore"));
    setBestScore(localBestScore);
  }, []);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
      localStorage.setItem("bestScore", JSON.stringify(currentScore));
    }
  }, [currentScore, bestScore]);

  useEffect(() => {
    // обнуление score и progress bar
    if (currentScore === 10) {
      console.log(currentScore);
      setTimeout(() => {
        setCompleted(0);
        setCurrentScore(0);
      }, 1000);
    }
  }, [currentScore]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   let data = {
  //     action: "load",
  //     cat: 1,
  //   };

  //   let response = await fetch(
  //     "https://cors-everywhere.herokuapp.com/http://loveyoucinema.com/script.php",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   ).then((res) => res);

  //   if (!response.ok) {
  //     console.log("Ошибка");
  //   }

  //   console.log(JSON.parse(JSON.stringify(response)));
  // };

  return (
    <main className="container">
      <div className="mainPage__inner container__row_wide">
        <div className="mainPage__general">
          <Score score={currentScore} />
          <div className="mainPage__film">
            <ProgressBar completed={completed} />
            <div className="mainPage__imgWrapper">
              <img className="mainPage__img" alt="Film" src={film.src} />
            </div>
          </div>
          <Score score={bestScore} />
        </div>
        <div className="mainPage__buttons">
          <FilmButton
            handleClick={(e) => handleClick(e)}
            name={film.but1}
            isTrue={isTrue}
          />
          <FilmButton
            handleClick={(e) => handleClick(e)}
            name={film.but2}
            isTrue={isTrue}
          />
          <FilmButton
            handleClick={(e) => handleClick(e)}
            name={film.but3}
            isTrue={isTrue}
          />
          <FilmButton
            handleClick={(e) => handleClick(e)}
            name={film.but4}
            isTrue={isTrue}
          />
        </div>
      </div>
    </main>
  );
}
