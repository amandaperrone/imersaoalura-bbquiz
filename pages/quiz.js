/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        CLEANING THE MESS...
      </Widget.Header>
      <Widget.Content>
        <img width="100%" src="https://media.giphy.com/media/73j8OT8DqHGyQ/giphy.gif" alt="loading" />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`PERGUNTA ${questionIndex + 1} DE ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p />
        <form onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          onSubmit();
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            LET'S GO
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 3000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  // React => efeitos / efects
  // React.useEffect
  // nasce === didMount
  // atualiza === willUpdate
  // morre === willUnmount

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
        />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
