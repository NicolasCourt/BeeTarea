import React from "react";
import "./autos.css"

const WaypointForm = (props) => {
    const refreshPage = ()=>{
        window.location.reload();
     }
    return (
        <div align="center">
            <form onSubmit={props.handleSubmit}>
                <h2 id="subtitle">Add a New Waypoint!</h2>
                <div id="div_in">
                    <input id="valor_in" onChange={props.handleChange} value={props.auto.patente} type="text"  name="patente" placeholder="Patente"/>
                </div>
                <div id="div_in">
                    <input id="valor_in" onChange={props.handleChange} value={props.auto.lat} type="number" step="0.001" name="lat" placeholder="Latitud"/>
                </div>
                <div id="div_in">
                    <input id="valor_in" onChange={props.handleChange} value={props.auto.lng} type="number"  step="0.001" name="lng" placeholder="Longitud"/>
                </div>
                <button type="submit" onClick={refreshPage}> Crear Waypoint</button>
            </form>
        </div>
    )
}

export default WaypointForm