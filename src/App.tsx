/* eslint-disable @typescript-eslint/no-unused-vars */

import {Header} from "./components/Header"
import styles from "./app.module.css"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed, type UsedLetterProps } from "./components/LettersUsed"
import { WORDS, type Challenge } from "./utils/words"
import { useState } from "react"

function getRandomChallenge(): Challenge {
  const index = Math.floor(Math.random() * WORDS.length);
  return WORDS[index];
}

export default function App() {
  const [attempt, setAttempt] = useState(0)
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(() => getRandomChallenge());
  const [letterUsed, setLetterUsed] = useState<UsedLetterProps[]>([{value:"R", correct: false}])

  function startGame() {
    setChallenge(getRandomChallenge());
    setAttempt(0)
    setLetter("")
    console.log(`Número de tentativas = ${attempt}, última letra = ${letter}, a palavra é = ${challenge?.word}`)
  }

  function onRestart() {
    alert("O jogo será reinicializados!");
    startGame();
  }

  if(!challenge){
    return null
  }

  return(
    <div className={styles.container}>
      <main>
        <Header max={10} current={attempt} onRestart={onRestart}/>
        <Tip tip="Biblioteca para criar interfaces Web com Javascript." />
        <div className={styles.word}>
          {
            challenge.word.split("").map(()=>(
              <Letter value="" />
            ))
          }
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"/>
          <Button title="Confirmar" onClick={startGame}/>
        </div>
        <LettersUsed data={letterUsed}/>
      </main>
    </div>
  )
}
