import styled from 'styled-components';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from "next/head";
import { Component } from 'react'
import { render } from 'react-dom'

/* export default class extend Component {
  render() {
    return (
      <>
      <Head>
        <title>BREAKING BAD QUIZ</title>
        <meta name="title" content="BREAKING BAD QUIZ" />
        <meta name="description" content="Projeto criado durante a Imersão React Nextjs da Alura." />

        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://breakingbad-quiz.amandaperrone.vercel.app/" />
        <meta property="og:title" content="BREAKING BAD QUIZ" />
        <meta property="og:description" content="Projeto criado durante a Imersão React Nextjs da Alura." />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

      </Head>
      </>
    )
  }
}; */

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <>
    <Head>
        <title>BREAKING BAD QUIZ</title>
        <meta name="title" content="BREAKING BAD QUIZ" />
        <meta name="description" content="Projeto criado durante a Imersão React Nextjs da Alura." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://breakingbad-quiz.amandaperrone.vercel.app/" />
        <meta property="og:title" content="BREAKING BAD QUIZ" />
        <meta property="og:description" content="Projeto criado durante a Imersão React Nextjs da Alura." />
        <meta property="og:image" content="https://www.wallpaperup.com/uploads/wallpapers/2013/08/20/136473/89620c3fe3f6b393b90487b29c9b9925-1000.jpg" />
      </Head>
      
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
              <h1>DO YOU KNOW HOW TO BREAK BAD?</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Em breve.
            </p>
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
    </>
  );
}
