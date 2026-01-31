import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"
import style from "./styles.module.css"

type Props = {
    max: number
    current: number
    onRestart: () => void;
}

export function Header({max, current, onRestart}:Props) {
    return(
        <div className={style.container}>
            <img src={logo} alt="Logo da aplicação"/>

            <header>
                <span>
                    <strong>{current}</strong> de {max} tentativas.
                </span>

                <button type="button" onClick={onRestart}>
                    <img src={restart} alt="Ícone de reinicialização"></img>
                </button>
            </header>
        </div>
    )
}