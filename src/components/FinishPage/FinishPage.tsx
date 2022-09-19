// import { useEffect, useRef } from "react";
import "./FinishPage.scss";
// import Telegram from "../../assets/images/telegram.svg";
// import VK from "../../assets/images/vk.svg";
// import Whatsapp from "../../assets/images/whatsapp.svg";
// import Facebook from "../../assets/images/facebook.svg";
// import OK from "../../assets/images/ok.svg";
// import Twitter from "../../assets/images/twitter.svg";
import { Link } from "react-router-dom";
import { ReactComponent as TelegramIcon} from "../../assets/images/telegram.svg";
import { ReactComponent as VkIcon} from "../../assets/images/vk.svg";
import { ReactComponent as WhatsappIcon} from "../../assets/images/whatsapp.svg";
import { ReactComponent as FacebookIcon} from "../../assets/images/facebook.svg";
import { ReactComponent as OkIcon} from "../../assets/images/ok.svg";
import { ReactComponent as TwitterIcon} from "../../assets/images/twitter.svg";
// import { ReactComponent as VkIcon} from "../../assets/images/vk.svg";;

export default function FinishPage() {
  let message = "Я отгадал 10 фильмов подряд на loveyoucinema.com";

  return (
    <div className="finishPage container__row_wide">
      <h1 className="finishPage__header">Поздравляем, вы победили!</h1>
      <p className="finishPage__description">
        Поделитесь результатом с друзьями
      </p>
      <div className="finishPage__share">
        <a
          href={`http://www.facebook.com/sharer.php?u=loveyoucinema.com&t=Я отгадал 10 фильмов подряд`}
          target="_blank"
          rel="noreferrer">
            <FacebookIcon className="finishPage__icon" />
        </a>
        <a
          href={`http://vk.com/share.php?url=loveyoucinema.com&title="Название"&description="fegrhtj"`}
          target="_blank"
          rel="noreferrer">
          <VkIcon/>
        </a>
        <a
          href={`https://connect.ok.ru/offer?url=loveyoucinema.com&title=${message}`}
          target="_blank"
          rel="noreferrer">
           <OkIcon/>
        </a>
        <a
          href="https://t.me/share/url?url=loveyoucinema.com&text=Я отгадал 10 фильмов подряд"
          target="_blank"
          rel="noreferrer">
          <TelegramIcon/>
        </a>
        <a
          href={`whatsapp://send?text=${message}`}
          target="_blank"
          rel="noreferrer">
          <WhatsappIcon/>
        </a>
        <a
          href={`http://twitter.com/share?text=${message}`}
          target="_blank"
          rel="noreferrer">
          <TwitterIcon/>
        </a>
      </div>
      <div className="finishPage__continue">
      <Link to="/" className="finishPage__button">
          Продолжить игру
        </Link>
      </div>
    </div>
  );
}