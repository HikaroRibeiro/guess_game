
import {Header} from "./components/Header"
import styles from "./app.module.css"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"

export default function App() {
  function onRestart() {
    alert("Função clicada.")
  }
  return(
    <div className={styles.container}>
      <main>
        <Header max={10} current={3} onRestart={onRestart}/>
        <Tip tip="Biblioteca para criar interfaces Web com Javascript." />
        <div className={styles.word}>
          <Letter value="B" />
          <Letter value="C" />
          <Letter value="D" />
          <Letter value="E" />
          <Letter value="F" />
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"/>
          <Button title="Confirmar" />
        </div>
      </main>
    </div>
  )
}
