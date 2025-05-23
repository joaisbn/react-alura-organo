import "./InputSelect.css"

export const InputSelect = (props) => {
    return (
        <div className="input-select">
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} value={props.value}>
                {props.items.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}