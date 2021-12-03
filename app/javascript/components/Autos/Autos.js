import React, { useState, useEffect} from "react"
import axios from 'axios'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import WaypointForm from "./Crear_waypoint"

const Autos = () => {
    const [autos, setAutos] = useState([])
    const [auto, setAuto] = useState([])

    useEffect (()=> {
        axios.get('/api/autos.json') // GET Todos Autos
        .then( resp => {
            setAutos(resp.data.data)
            console.log(resp)
         })
         
        .catch( resp => console.log(resp) )
    }, [autos.length])
    
    const handleChange = (variable) => {     /* Manejo de elementos en el form   */ 
        variable.preventDefault()

       setAuto(Object.assign({}, auto, {[variable.target.name]: variable.target.value}))
       console.log('asd', auto)
    }

    const handleSubmit = (variable) => {    /* Manejo submit del form   */ 
        variable.preventDefault()

        const token = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token
        axios.post('/api/autos', auto)
        .then(resp => {
            
        })    
        .catch(resp => {})
    }

    /* Para mostrar los puntos se ocupa react-leaflet lo que permite poner marcadores en un mapa (Markers)   */ 
    
    return (     
        <><link href="./autos.css" rel="stylesheet"/><div class="main">

            <div id="header"> 
                <h1 align="center"> BeeMap</h1>
            </div>

            <div class="lower_div" >
                <div id="left">
                        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                        crossorigin="" />
                        <MapContainer
                            center={[-33.44272634720482, -70.6722041416586]}
                            zoom={2}
                            style={{ width: '50vw', height: '70vh' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                        
                                {autos.map( auto => (
                                    <Marker position={[auto.attributes.lat, auto.attributes.lng]}> 
                                        <Popup>{auto.attributes.patente}</Popup>
                                    </Marker>
                                    )
                                )}                       

                        </MapContainer>
                </div>
    
                <div id="right">
                        <WaypointForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            auto={auto}
                        /> 
                </div>
            </div>
        </div></>


        )
}

export default Autos


  
  