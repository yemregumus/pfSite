import { useEffect } from "react";
import $ from "jquery";

const useTypingAnimation = (words, speed, delay) => {
  useEffect(() => {
    let i = 0;
    const $wordElement = $(".word");

    const wordflick = function () {
      const currentWord = words[i];
      let currentText = "";

      const interval = setInterval(function () {
        if (currentText.length <= currentWord.length) {
          currentText = currentWord.substr(0, currentText.length + 1);
          $wordElement.html(currentText);
        } else {
          clearInterval(interval);
          i = (i + 1) % words.length;
          setTimeout(wordflick, delay);
        }
      }, speed);
    };

    wordflick();
  }, [words, speed, delay]);
};

export default useTypingAnimation;
