import React from 'react'
import Card from './Card'
import "./Card.css"
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
import CardCuartos from './CardCuartos';

const url="https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"

function CardSpace(){

const [space, setspaces] = useState([]);
const [spaces, selectSpaces] = useState();

  useEffect(() => {
    
    if(localStorage.getItem("space")==null && navigator.onLine) {
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
          let spacesU = [];
          data.forEach((element) => {
            spacesU.push(element);
          });
          setspaces(spacesU);
          localStorage.setItem("space", JSON.stringify(data))
        })
        .catch((e) => console.warn(e));
    }
    else{
      setspaces(JSON.parse(localStorage.getItem("space")));
  }
    
    
  }, []);

  return (
    <div>
      <div id="space">
        <h1><FormattedMessage id ="MySpaces"/></h1>
        <div className="card-group">
          {space.map((d) => (
            <Card
              key={d.id}
              space={d}
              onClick={() => selectSpaces(d)}
            />
          ))}
        </div>
      </div>

      <div id="Habitaciones" style={{ marginLeft: "20px", marginRight: "20px" }}>
        {spaces != null ? <CardCuartos habitaciones={spaces} /> : null}
      </div>
      <div id="chart">
      </div>
    </div>
  );
}

export default CardSpace;

