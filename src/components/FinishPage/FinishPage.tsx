import "./FinishPage.scss";
import { Link } from "react-router-dom";
import { ReactComponent as TelegramIcon } from "../../assets/images/telegram.svg";
import { ReactComponent as VkIcon } from "../../assets/images/vk.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/images/whatsapp.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";
import { ReactComponent as OkIcon } from "../../assets/images/ok.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter.svg";
import { getPageLang } from "../../helpers/helpers";

export default function FinishPage() {
  const lang = getPageLang();
  let message =
    lang === "ru"
      ? "Я отгадал 10 фильмов подряд на loveyoucinema.com"
      : "I guessed 10 films in a row on loveyoucinema.com";

  return (
    <div className="finishPage container__row_wide">
      <h1 className="finishPage__header">
        {lang === "ru"
          ? "Поздравляем, вы победили!"
          : "Congratulations, you've won!"}
      </h1>
      <p className="finishPage__description">
        {lang === "ru"
          ? "Поделитесь результатом с друзьями"
          : "Share the result with your friends"}
      </p>
      <div className="finishPage__share">
        <a
          href={`http://www.facebook.com/sharer.php?u=loveyoucinema.com&t=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="finishPage__icon" />
        </a>
        <a
          href={`http://vk.com/share.php?url=loveyoucinema.com&title=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <VkIcon className="finishPage__icon" />
        </a>
        <a
          href={`https://connect.ok.ru/offer?url=loveyoucinema.com&title=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <OkIcon className="finishPage__icon" />
        </a>
        <a
          href={`https://t.me/share/url?url=loveyoucinema.com&text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <TelegramIcon className="finishPage__icon" />
        </a>
        <a
          href={`whatsapp://send?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappIcon className="finishPage__icon" />
        </a>
        <a
          href={`http://twitter.com/share?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon className="finishPage__icon" />
        </a>
      </div>
      <div className="finishPage__continue">
        <Link to="/" className="finishPage__button">
          {lang === "ru" ? "Продолжить игру" : "Continue game"}
        </Link>
      </div>
    </div>
  );
}
