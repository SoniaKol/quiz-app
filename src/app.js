import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const currentQuestionStored = localStorage.getItem('currentQuestion');
  const indexesLs = localStorage.getItem('indexes');

  if (indexesLs === null) {
    const indexes = randomOrder();
    localStorage.setItem('indexes', indexes);
  }
  if (currentQuestionStored) {
    quizData.currentQuestionIndex = Number(currentQuestionStored);
    initQuestionPage();
  } else {
    quizData.currentQuestionIndex = 0;
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);

export const randomOrder = () => {
  const arrayOfIndex = [];
  let i;

  do {
    i = Math.floor(Math.random() * 70);
    if (!arrayOfIndex.includes(i)) {
      arrayOfIndex.push(i);
    }
  } while (arrayOfIndex.length < 10);

  return arrayOfIndex;
};
