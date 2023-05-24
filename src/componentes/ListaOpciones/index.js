import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => {
    //  return <option></option>
    // })
    
    const manejarCambio = (e) => {
        console.log("cambio")
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
            {props.equipos.map((equipos, index) => <option key={index}value={equipos}>{equipos}</option>)}
        </select>
    </div>
}

export default ListaOpciones