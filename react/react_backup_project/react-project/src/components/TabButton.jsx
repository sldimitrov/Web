export default function TabButton({ children, onSelect, isSelected }) {
    // console.log("TABBUTTON COMPONENT EXECUTING")

    return (
    <li>
        <button className={isSelected && 'active'} onClick={onSelect}>
            {children}
        </button>
    </li>
    )
}