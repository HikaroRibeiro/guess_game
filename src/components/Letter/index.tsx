import styles from "./styles.module.css"

type Props = {
    value: string
    size?: string
    answer?: string
}

export function Letter({value = "", size = "default", answer="default"}:Props){
    return(
        <div className={
            `
                ${styles.container} 
                ${size === "small" && styles.smallLetters}
                ${answer === "correct" && styles.letterCorrect}
                ${answer === "wrong" && styles.letterWrong}
            `
            } >
            <span>
                {value}
            </span>
        </div>
    )

}