import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
// eslint-disable-next-line import/no-named-as-default
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';
import Input from '../src/components/Input';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (

    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>DO YOU KNOW HOW TO BREAK BAD?</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => { setName(infosDoEvento.target.value); }}
                placeholder="Say your name."
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                C'MOM B*TCH
              </Button>
            </form>

          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Outros quizes:</h1>
            <p>
              Em breve.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/amandaperrone" />
    </QuizBackground>
  );
}
