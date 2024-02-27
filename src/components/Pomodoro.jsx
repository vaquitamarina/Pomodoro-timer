export function Pomodoro({selected}){
    return (
        <header>
            <ul>
                <li className={selected[0]}>Pomodoro</li>
                <li className={selected[1]}>Short Break</li>
                <li className={selected[2]}>Long Break</li>
            </ul>
        </header>
    )
}