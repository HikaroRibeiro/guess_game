import { Letter } from "../Letter"
import styles from "./styles.module.css"

export type UsedLetterProps = {
    value: string
    correct: boolean
}

type Props = {
    data: UsedLetterProps[]
}

export function LettersUsed({ data }:Props){
    return(
        <div className={styles.container}>
            <h5>Letras utilizadas</h5>
            <div>
                {
                    data.map(({value, correct}) => (
                        <Letter 
                            size="small" 
                            key={value}
                            value={value} 
                            answer={correct ? "correct" : "wrong"} />
                    ))
                }
            </div>
        </div>
    )
}