import PropTypes from 'prop-types'
function ItemFormulario({nome, tipo, label, place }) {
    return(
        <div>
            <label htmlFor={nome}>{label} </label>
            <input type={tipo} id={nome} name={nome} placeholder={place} ></input>
        </div>
    )
}

export default ItemFormulario