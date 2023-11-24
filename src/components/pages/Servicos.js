import ItemServico from "../ItemServico"

function Servicos() {
    return(
        <div>
            <h1>Nosso Serviços</h1>

            <h2>Como uma empresa de tecnologia, nós abrangemos diversas área da tecnologia. Veja</h2>
            
            <ItemServico link="https://www.computersciencedegreehub.com/wp-content/uploads/2020/06/Is-Computer-Science-the-Same-as-Programming-768x512.jpg" descricao="Desenvolvemos sites de alta qualidade de acordo com os critérios do cliente."/>
            
            <ItemServico link="https://www.computersciencedegreehub.com/wp-content/uploads/2020/06/Is-Computer-Science-the-Same-as-Programming-768x512.jpg" descricao="Montamos e desmontamos computadores, fazemos limpeza e formatação." />
            
            <ItemServico link="https://www.computersciencedegreehub.com/wp-content/uploads/2020/06/Is-Computer-Science-the-Same-as-Programming-768x512.jpg" descricao="Desenvolvemos programas de alta qualidade" />
            
        </div>
    )
}

export default Servicos