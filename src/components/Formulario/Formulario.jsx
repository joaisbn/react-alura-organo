import { InputText } from "../InputText"
import { InputSelect } from "../InputSelect"
import { Button } from "../Button"
import { useState } from "react"

import "./Formulario.css"

export const Formulario = () => {
    const teams = [
        "Programação", "Front-end", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"
    ]

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const eventSubmit = (event) => {
        event.preventDefault()
        console.log("Formulário enviado =>", nome, cargo, imagem, time)
    }

    return (
        <section className="formulario">
            <form onSubmit={eventSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText
                    value={nome}
                    onChange={value => setNome(value)}
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                />

                <InputText
                    value={cargo}
                    onChange={value => setCargo(value)}
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                />

                <InputText
                    value={imagem}
                    onChange={value => setImagem(value)}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                />

                <InputSelect
                    value={time}
                    onChange={value => setTime(value)}
                    label="Time"
                    items={teams}
                />

                <Button>Criar card</Button>
            </form>
        </section>
    )
}