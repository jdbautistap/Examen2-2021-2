import React from 'react'
import Cuartos1 from './Cuartos'
import Tabla from './Tabla';
import "./Card.css"
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
import DiagramaTorta from './DiagramaTorta';

const url="https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

function CardCuartos(pID){
    const [Cuartos, setCuartos] = useState([]);
    const [cuarto, selectCuarto] = useState();
    useEffect(() => {

        if(localStorage.getItem("Cuartos")==null && navigator.onLine) {
        fetch(
            url,
            {
            method: "GET",
            }
        )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let habitacionesU = [];
          data.forEach((element) => {
            if (element.homeId === pID.habitaciones.id) {
              habitacionesU.push(element);
            }
          });
          setCuartos(habitacionesU);
          localStorage.setItem("Cuartos", JSON.stringify(data))
        })
        .catch((e) => console.warn(e));
    }
    else{
      var data = JSON.parse(localStorage.getItem("Cuartos"));
      let habitacionesU = [];
      data.forEach((element) => {
        if (element.homeId === pID.habitaciones.id) {
          habitacionesU.push(element);
        }
      });
      setCuartos(habitacionesU);
  }
    
  }, [pID.habitaciones.id]);

  return (
    <div id="Cuartos" >
      <h1><FormattedMessage id ="MyRooms"/></h1>
      <div className="row">
        <div className="col"style={{ marginLeft: "20px", marginRight: "20px" }}>
        <div className="card-group"style={{ marginLeft: "20px", marginRight: "20px" }} >
        {Cuartos.map((d) => (
          <Cuartos1 key={d.name + d.homeId} habitaciones={d}  onClick={() => selectCuarto
      (d)}/>
        ))}
      </div>
      </div>
      <div className="col">
      {cuarto != null ? <Tabla temp={cuarto} /> : null}
      </div>
      {Cuartos  != null ? <DiagramaTorta torta={Cuartos}/> : null}
    </div>
      </div> 
  );
}

export default CardCuartos

