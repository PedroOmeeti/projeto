import ItemFormulario from "../ItemFormulario"


function Contato() {
    return(
        <div>
            <p>
                <ItemFormulario tipo="text" nome="Pedro" label="Nome: " place="Digite o seu nome" />
                <ItemFormulario tipo="email" nome="email" label="Email: " place="Digite o seu e-mail" />
                <ItemFormulario tipo="text" nome="assunto" label="Assunto: " place="Qual é o assunto?" />
            
                <label htmlFor="area">Nos envie uma mensagem</label><br></br>
                <textarea id="area" name="area" placeholder="Digite uma mensagem"></textarea><br></br>

                <button id="button" name="button">Enviar</button>

            </p>
        </div>
    )
}

export default Contato
