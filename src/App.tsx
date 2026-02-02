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

const ATTEMPT_NUMBER = 3

export default function App() {

  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(() => getRandomChallenge());
  const [letterUsed, setLetterUsed] = useState<UsedLetterProps[]>([])

  function startGame() {
    setChallenge(getRandomChallenge());
    setScore(0)
    setLetter("")
    setLetterUsed([])
    
  }

  function handleConfirm() {

    if(!challenge){
      return alert("Ainda não existe um desafio.")
    }

    if(!letter.trim()){
      return alert("Digite uma letra!")
    }

    const value = letter.toUpperCase()
    const exists = letterUsed.find((used) => used.value.toUpperCase() === value)

    if(exists) {
      return alert(`A letra "${value}" já foi utilizada!`)
    }

    const hits = challenge.word.toUpperCase().split("").filter((char) => char === value).length

    const correct = hits > 0
    const currentScore = score + hits

    setLetterUsed((prevState) => [...prevState, {value, correct}])
    setScore(currentScore)

    setLetter("")
  }

  function onRestart() {
    startGame();
  }

  if(!challenge){
    return null
  }

  return(
    <div className={styles.container}>
      <main>
        <Header max={challenge.word.length + ATTEMPT_NUMBER} current={letterUsed.length} onRestart={onRestart}/>
        <Tip tip={challenge.tip} />
        <div className={styles.word}>
          {
            challenge.word.split("").map((letter, index) => {
              const lettersUsed = letterUsed.find((used) => used.value.toUpperCase() === letter.toUpperCase())
              console.log(lettersUsed)

              return <Letter value={lettersUsed?.value.toString() || ""} key={index} answer={lettersUsed?.correct ? "correct" : "default"}/>
            })
          }
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" value={letter} onChange={(e) => setLetter(e.target.value)}/>
          <Button title="Confirmar" onClick={handleConfirm}/>
        </div>
        <LettersUsed data={letterUsed}/>
      </main>
    </div>
  )
}
