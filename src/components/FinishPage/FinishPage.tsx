import { useEffect, useRef } from "react";
import "./FinishPage.scss";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TelegramShareButton,
//   TelegramIcon,
// } from "next-share";

export default function FinishPage() {
  const ref = useRef(null);
  //   useEffect(() => {
  //     let yaShare = ref;
  //     let share = Ya.share2(yaShare, {
  //       content: {
  //         url: "www.loveyoucinema.com",
  //         title: "заголовок",
  //         description: "Я выиграл в игру...",
  //       },
  //       theme: {
  //         counter: true,
  //         size: "m",
  //       },
  //     });
  //   }, []);
  return (
    <div className="finishPage container__row_wide">
      <h1 className="finishPage__header">Поздравляем, вы победили!</h1>
      <p className="finishPage__description">
        Поделитесь результатом с друзьями:
      </p>
      <div className="finishPage__share">
        <div
          className="ya-share2"
          ref={ref}
          data-curtain
          data-size="l"
          data-shape="round"
          data-services="vkontakte,odnoklassniki,telegram,twitter,whatsapp,moimir"></div>
        {/* <a
          href="https://vk.com/share.php?url=http://mysite.com"
          title="Я выиграл"
          target="_blank"
          rel="noreferrer">
          Ссылка на ВК{" "}
        </a> */}
        {/* <FacebookShareButton
          url={"https://github.com/next-share"}
          quote={"Я выиграл"}>
          <FacebookIcon size={55} round />
        </FacebookShareButton>
        <TelegramShareButton
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }>
          <TelegramIcon size={55} round />
        </TelegramShareButton> */}
      </div>
    </div>
  );
}
