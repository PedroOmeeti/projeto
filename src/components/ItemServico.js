import './ItemServico.components.css'

function ItemServico({ link, descricao }) {
    return(
        <div className="caixa">
            <img className="imagem" src={link}></img>
            <p className="descricao">{descricao}</p>
        </div>
    )
}

export default ItemServico