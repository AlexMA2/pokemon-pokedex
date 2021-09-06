import {useState} from 'react'
import styles from '../styles/Cell.module.css'

const Cell = ({type = "normal", text}) => {

    const [newText, setnewText] = useState(text)

    return (
        <div className={styles.cell}>
            <input  className={styles[type]} type="text" value={newText} onChange={() => setnewText(e.target.value)}/>
        </div>
    )
}

export default Cell
