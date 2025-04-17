import './InputText.css'

export const InputText = (props) => {
    const onTyping = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyping} required={props.required} type="text" placeholder={props.placeholder} />
        </div>
    )
}