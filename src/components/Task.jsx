export function Task({index, children, removeTask}) {
    const handClick = () => {
        removeTask(index)
    }
    return (
        <li>{children}<span onClick={handClick}>×</span> </li>
    )
}