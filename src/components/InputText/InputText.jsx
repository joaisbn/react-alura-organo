import './InputText.css'

export const InputText = (props) => {
    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input required={props.required} type="text" placeholder={props.placeholder} />
        </div>
    )
}