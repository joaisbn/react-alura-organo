import { InputText } from "../InputText"
import { InputSelect } from "../InputSelect"
import { Button } from "../Button"

import "./Formulario.css"

export const Formulario = () => {
    const teams = [
        "Programação", "Front-end", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"
    ]

    const eventSubmit = (event) => {
        event.preventDefault()
        console.log("Formulário enviado")
    }

    return (
        <section className="formulario">
            <form onSubmit={eventSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText required={true} label="Nome" placeholder="Digite seu nome" />
                <InputText required={true} label="Cargo" placeholder="Digite seu cargo" />
                <InputText label="Imagem" placeholder="Digite o endereço da imagem" />
                <InputSelect label="Time" items={teams} />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}